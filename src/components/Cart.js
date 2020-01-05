import React, { Component } from 'react'
import '../index.css';
import { connect } from "react-redux";
import Header from './Header';
import Footer from './Footer';
import { faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <Header />
                <div className="container">
                    <h1>CART <FontAwesomeIcon icon={faShoppingCart} /></h1>
                    <div style={{ "overflowX:": "auto" }}>

                        <table>
                            <thead>

                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.lineItems.map(product =>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{(product.price / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                </tr>
        )}
                                <tr>
                                    <td >Subtotal</td>
                                    <td>{(this.props.subtotal / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                </tr>
                                <tr>
                                    <td >Tax</td>
                                    <td>{(this.props.tax / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                </tr>
                                <tr>
                                    <td >Total</td>
                                    <td>{(this.props.total / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                </tr>
                                </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">
                                        <button onClick={this.getOrders99}>
                                            APPLY
                                        </button>

                                        <input id="discount-code" name="discount-code" type="text" placeholder="Discount Code" aria-label="Discount Code" onChange={this.updatePayment} value={this.props['discount-code']}></input>
                                    </td>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <button onClick={this.postOrders} style={{ width: '100%', padding: '1rem', bgColor: '#ccc' }}>

                        <FontAwesomeIcon icon={faCartArrowDown} size="1x" color="#f3cd14" /> BUY NOW
                    </button>


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

const mapStateToProps = (state) => (state.cart)

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)