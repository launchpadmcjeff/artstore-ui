#!/bin/sh

export SPA_NAME=artstore-ui
export SPA_HOSTNAME=artstore
export SPA_DOMAIN_NAME=robowe.be
export REGION=us-east-2

function getBooleanHss {
	echo "getBooleanHss [1/0y/n/Y/N]"
	echo $1
	read junk
	if [ $junk = "y" ]
	then
		return 0
	else
		return 1
	fi
}


function getBooleanHssOrDie {
	while :
	do
		echo "getBooleanHss [1/0y/n/Y/N]"
		echo $1
		read junk
		if [ $junk = "y" ]
		then
			break	
		fi
	done

}

function install {
    aws cloudformation create-stack --stack-name ${SPA_NAME} \
        --template-body file://cicd/cicd-template.yaml --region ${REGION} \
        --parameters ParameterKey=SpaName,ParameterValue=${SPA_NAME} \
        ParameterKey=SpaHostName,ParameterValue=${SPA_HOSTNAME} \
        ParameterKey=SpaDomainName,ParameterValue=${SPA_DOMAIN_NAME} \
        ParameterKey=SiteBucketName,ParameterValue=${SPA_NAME}-site \
        ParameterKey=SiteUploadBucketName,ParameterValue=${SPA_NAME}-upload \
        ParameterKey=SiteLogsBucketName,ParameterValue=${SPA_NAME}-logs \
        --capabilities CAPABILITY_IAM
}


function uninstall {
    aws s3 rm s3://${SPA_NAME}-site --recursive --region ${REGION}
    aws s3 rm s3://${SPA_NAME}-upload --recursive --region ${REGION}
    aws s3 rm s3://${SPA_NAME}-logs --recursive --region ${REGION}

    aws s3 rb s3://${SPA_NAME}-site
    aws s3 rb s3://${SPA_NAME}-upload
    aws s3 rb s3://${SPA_NAME}-logs

    aws cloudformation delete-stack --stack-name ${SPA_NAME} --region ${REGION}
}

function sync {
	aws s3 sync --acl public-read ./build s3://${SPA_NAME}-site --delete
}

case $1 in
  "install")
	echo "installing spa to ${REGION} as ${SPA_NAME}"
	install
	;;
  "uninstall")
	echo "uninstalling spa ${SPA_NAME} from ${REGION}"
	uninstall
	;;
  'sync')
    echo "syncing spa ${SPA_NAME}-site in ${REGION}"
	sync
	;;
  *)
	echo "unrecognized command: ${1}"
  ;;
esac

echo "done $1"
