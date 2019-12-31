import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from "react-router-dom";
import { faShoppingCart, faShippingFast, faFileImage, faFileInvoiceDollar, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <NavLink to="/" exact={true} style={{color: "#fff"}} activeStyle={{backgroundColor: "black", color: "gold"}}><FontAwesomeIcon icon={faFileImage} /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" style={{color: "#fff"}} activeStyle={{backgroundColor: "black", color: "gold"}}><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/shipping" style={{color: "#fff"}} activeStyle={{backgroundColor: "black", color: "gold"}}><FontAwesomeIcon icon={faShippingFast} /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/payment" style={{color: "#fff"}} activeStyle={{backgroundColor: "black", color: "gold"}}><FontAwesomeIcon icon={faFileInvoiceDollar} /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders" style={{color: "#fff"}} activeStyle={{backgroundColor: "black", color: "gold"}}><FontAwesomeIcon icon={faImages} /></NavLink>
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
