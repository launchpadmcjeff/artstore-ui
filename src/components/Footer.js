import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { faShoppingCart, faShippingFast, faFileImage, faFileInvoiceDollar, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faFileImage} className="p-1" color="#fff" /></Link>
                    </li>
                    <li>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} className="p-1" color="#fff" /></Link>
                    </li>
                    <li>
                        <Link to="/shipping"><FontAwesomeIcon icon={faShippingFast} className="p-1" color="#fff" /></Link>
                    </li>
                    <li>
                        <Link to="/payment"><FontAwesomeIcon icon={faFileInvoiceDollar} className="p-1" color="#fff" /></Link>
                    </li>
                    <li>
                        <Link to="/orders"><FontAwesomeIcon icon={faImages} className="p-1" color="#fff" /></Link>
                    </li>
                </ul>
            </footer>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
