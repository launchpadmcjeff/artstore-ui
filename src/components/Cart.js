import React, { Component } from 'react'
import '../index.css';
import { connect } from "react-redux";
import Header from './Header';
import Footer from './Footer';
import { faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { submitOrder, removeFromCart } from '../redux/actions'

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
                                    <th colSpan="2">Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.cart.lineItems.map(product =>
                                    <tr key={product.id}>
                                        <td><button onClick={(e) => this.removeFromCart(product.id, e)} className="cart-remove">&times;</button></td>
                                        <td>{product.name}</td>
                                        <td>{(product.price / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan="2">Subtotal</td>
                                    <td>{(this.props.cart.subtotal / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Tax</td>
                                    <td>{(this.props.cart.tax / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td>{(this.props.cart.total / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">
                                        <button onClick={this.applyDiscount}>
                                            APPLY
                                        </button>
                                        <input id="discount-code" name="discount-code" type="text" placeholder="Discount Code" aria-label="Discount Code" onChange={this.updatePayment} value={this.props.cart['discount-code']}></input>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <button onClick={this.buyNow} style={{ width: '100%', padding: '1rem', bgColor: '#ccc' }}>
                        <FontAwesomeIcon icon={faCartArrowDown} size="1x" color="#f3cd14" /> BUY NOW
                    </button>
                </div>
                <Footer />
            </div>
        )
    }

    removeFromCart = (id, e) => {
        e.preventDefault();
        this.props.dispatch(removeFromCart(id));

    }

    applyDiscount = async (e) => {
        e.preventDefault();
        console.log("apply discount");

    }

    buyNow = async (e) => {
        e.preventDefault();
        console.log(this.buildOrder());
        this.props.dispatch(submitOrder(this.buildOrder()));
    }

    buildOrder = () => {
        return {
            itemCount: this.props.cart.itemCount,
            products: this.props.cart.lineItems,
            subTotal: this.props.cart.subtotal,
            tax: this.props.cart.tax,
            total: this.props.cart.total,
            shippingMethod: this.props.shipping['shipping-method'],
            subscribeNewsOffers: this.props.shipping['news-and-offers'],
            saveInfo: this.props.shipping['save-info'],
            shippingAddress: {
                email: this.props.shipping.email,
                givenName: this.props.shipping['given-name'],
                familyName: this.props.shipping['family-name'],
                organization: this.props.shipping['organization'],
                addressLine1: this.props.shipping['address-line1'],
                addressLine2: this.props.shipping['address-line2'],
                addressLevel2: this.props.shipping['address-level2'],
                addressLevel1: this.props.shipping['address-level1'],
                postalCode: this.props.shipping['postal-code'],
                telNational: this.props.shipping['tel-national']
            },
            billingAddress: {
                email: this.props.payment.email,
                givenName: this.props.payment['given-name'],
                familyName: this.props.payment['family-name'],
                organization: this.props.payment['organization'],
                addressLine1: this.props.payment['address-line1'],
                addressLine2: this.props.payment['address-line2'],
                addressLevel2: this.props.payment['address-level2'],
                addressLevel1: this.props.payment['address-level1'],
                postalCode: this.props.payment['postal-code'],
                telNational: this.props.payment['tel-national']
            },
            ccNumber: this.props.payment['cc-number'],
            ccName: this.props.payment['cc-name'],
            ccExp: this.props.payment['cc-exp'],
            ccCsc: this.props.payment['cc-csc'],
            billingEqualShipping: this.props.payment['billing-eq-shipping']
        }
    }
}

const mapStateToProps = (state) => ({cart: state.cart, shipping: state.shipping, payment: state.payment})

export default connect(mapStateToProps)(Cart)