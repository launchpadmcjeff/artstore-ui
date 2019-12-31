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
                    <label for="cc-number">Card Number</label>
                    <input id="cc-number" name="cc-number" autocomplete="cc-number" type="text" placeholder="Card Number"></input>
                    <label for="cc-name">Name on Card</label>
                    <input id="cc-name" name="cc-name" autocomplete="cc-name" type="text" placeholder="Name on Card"></input>
                    <label for="cc-exp">Expiration MM/YY</label>
                    <input id="cc-exp" name="cc-exp" autocomplete="cc-exp" type="text" placeholder="Expiration MM/YY"></input>
                    <label for="cc-csc">Security Code</label>
                    <input id="cc-csc" name="cc-csc" autocomplete="cc-csc" type="text" placeholder="Security Code"></input>
                </form>
                - card number
                - name on card
                - expiration date
                - Security code

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
