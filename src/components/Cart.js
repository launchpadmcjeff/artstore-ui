import React, { Component } from 'react'
import '../index.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { faShoppingCart, faShippingFast, faFileImage, faFileInvoiceDollar, faImages, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <Header />
                <div className="container">
                    <h1>CART <FontAwesomeIcon icon={faShoppingCart} /></h1>
                    <div style={{ "overflow-x:": "auto" }}>

                        <table>
                            <thead>

                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>lorem2</td>
                                    <td>2</td>
                                    <td>$29.99</td>
                                    <td>$59.99</td>
                                </tr>
                                <tr>
                                    <td>lorem2</td>
                                    <td>3</td>
                                    <td>$36.99</td>
                                    <td>$129.99</td>
                                </tr>
                                <tr>
                                    <td>lorem2</td>
                                    <td>1</td>
                                    <td>$119.99</td>
                                    <td>$119.99</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Subtotal</td>
                                    <td>$1939.36</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Tax</td>
                                    <td>$36.36</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Total</td>
                                    <td>$2013.36</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <FontAwesomeIcon icon={faCartArrowDown} />


                </div>
                <Footer />
            </div>
        )
    }



    getProducts = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/artstore/rest/products', { headers: { 'Content-Type': 'application/json' } });
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));

    }
    getOrders99 = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/artstore/rest/orders/99', { headers: { 'Content-Type': 'application/json' } });
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));

    }
    getOrders = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/artstore/rest/orders', { headers: { 'Content-Type': 'application/json' } });
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));

    }

    // Example POST method implementation:
    postOrders = async (e) => {
        e.preventDefault();
        try {
            const data = await this.postData('http://localhost:8080/artstore/rest/orders', {});
            console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
        } catch (error) {
            console.error(error);
        }
    }

    postData = async (url = '', data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
}

export default connect()(Cart);