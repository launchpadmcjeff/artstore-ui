import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';

export class Payment extends Component {
    render() {
        return (
            <div className="Payment">
                <Header />
                <div className="container">

                <h1>Payment</h1>
                All transactions are secure and encrypted
                <form>
                    <label htmlFor="discount-code">Discount Code</label>
                    <input id="discount-code" name="discount-code" type="text" placeholder="Discount Code"></input>
                    <label htmlFor="cc-number">Card Number</label>
                    <input id="cc-number" name="cc-number" autoComplete="cc-number" type="text" placeholder="Card Number"></input>
                    <label htmlFor="cc-name">Name on Card</label>
                    <input id="cc-name" name="cc-name" autoComplete="cc-name" type="text" placeholder="Name on Card"></input>
                    <label htmlFor="cc-exp">Expiration MM/YY</label>
                    <input id="cc-exp" name="cc-exp" autoComplete="cc-exp" type="text" placeholder="Expiration MM/YY"></input>
                    <label htmlFor="cc-csc">Security Code</label>
                    <input id="cc-csc" name="cc-csc" autoComplete="cc-csc" type="text" placeholder="Security Code"></input>
                </form>
 

                Billing Address
                - check same as shipping address

                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
