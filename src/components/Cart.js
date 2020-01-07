import React, { Component } from 'react'
import '../index.css';
import { connect } from "react-redux";
import Header from './Header';
import Footer from './Footer';
import { faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { submitOrder } from '../redux/actions'

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
                                    <tr key={product.id}>
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
                    <button onClick={this.getOrders99} style={{ width: '100%', padding: '1rem', bgColor: '#ccc' }}>
                        <FontAwesomeIcon icon={faCartArrowDown} size="1x" color="#f3cd14" /> BUY NOW
                    </button>
                </div>
                <Footer />
            </div>
        )
    }

    testItem = {
        "itemCount": "2",
        "subTotal": "0",
        "tax": "0",
        "total": "0",
        "shippingMethod": "USPS",
        "subscribeNewsOffers": true,
        "saveInfo": true,
        "shippingAddress": {

        },
        "billingAddress": {
            "email": "foo@bar.com",
            "givenName": "",
            "familyName": "",
            "organization": "",
            "addressLine1": "",
            "addressLine2": "",
            "addressLevel2": "",
            "addressLevel1": "",
            "postalCode": "",
            "telNational": ""
        }

    }
    getOrders99 = async (e) => {
        e.preventDefault();
        console.log(this.testItem);
        this.props.dispatch(submitOrder(this.testItem));
    }
}

const mapStateToProps = (state) => (state.cart)

const mapDispatchToProps = {
    submitOrder

}

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
export default connect(mapStateToProps)(Cart)