import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {
    render() {
        return (
            <footer>
                Lorem ipsum dolor sit amet.
            </footer>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
