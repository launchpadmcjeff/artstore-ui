import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import { updatePayment } from '../redux/actions'; 

export class Payment extends Component {
    updatePayment = (e) => {
        console.log(e.target);
        console.log(e.target.checked);
        if (e.target.name === 'billing-eq-shipping') {
            this.props.updatePayment({'billing-eq-shipping': e.target.value});
        } else {
            this.props.updatePayment({[e.target.name]: e.target.value});
        }

    }

    render() {
        return (
            <div className="Payment">
                <Header />
                <div className="container">

                    <h1>Payment</h1>
                    <div style={{ display: "grid", gridRowGap: "1rem", width: "90%", margin: ".5rem auto" }}>

                        All transactions are secure and encrypted
                        <input id="discount-code" name="discount-code" type="text" placeholder="Discount Code" aria-label="Discount Code" onChange={this.updatePayment} value={this.props['discount-code']}></input>
                        <input id="cc-number" name="cc-number" autoComplete="cc-number" type="text" placeholder="Card Number" aria-label="Card Number" onChange={this.updatePayment} value={this.props['cc-number']}></input>
                        <input id="cc-name" name="cc-name" autoComplete="cc-name" type="text" placeholder="Name on Card" aria-label="Name on Card" onChange={this.updatePayment} value={this.props['cc-name']}></input>
                        <input id="cc-exp" name="cc-exp" autoComplete="cc-exp" type="text" placeholder="Expiration MM/YY" aria-label="Expiration MM/YY" onChange={this.updatePayment} value={this.props['cc-exp']}></input>
                        <input id="cc-csc" name="cc-csc" autoComplete="cc-csc" type="text" placeholder="Security Code" aria-label="Security Code" onChange={this.updatePayment} value={this.props['cc-csc']}></input>

                        <h3>Billing Address</h3>
                        <label className="tupperware">
                        Same as shipping address
                            <input id="billing-eq-shipping" name="billing-eq-shipping" type="radio" checked={this.props['billing-eq-shipping'] === 'true'} onChange={this.updatePayment} value='true'></input>
                            <span className="radio"></span>
                        </label>

                        <label className="tupperware">
                        Use a different billing address
                            <input id="billing-neq-shipping" name="billing-eq-shipping" type="radio" checked={this.props['billing-eq-shipping'] === 'false'} onChange={this.updatePayment} value='false'></input>
                            <span className="radio"></span>
                        </label>
                </div>

                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.payment)

const mapDispatchToProps = {
    updatePayment
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
