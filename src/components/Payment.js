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
                    <div style={{ display: "grid", gridRowGap: "1rem", width: "90%", margin: ".5rem auto" }}>

                        All transactions are secure and encrypted
                            {/* <label htmlFor="discount-code">Discount Code</label> */}
                        <input id="discount-code" name="discount-code" type="text" placeholder="Discount Code" aria-label="Discount Code"></input>
                        {/* <label htmlFor="cc-number">Card Number</label> */}
                        <input id="cc-number" name="cc-number" autoComplete="cc-number" type="text" placeholder="Card Number" aria-label="Card Number"></input>
                        {/* <label htmlFor="cc-name">Name on Card</label> */}
                        <input id="cc-name" name="cc-name" autoComplete="cc-name" type="text" placeholder="Name on Card" aria-label="Name on Card"></input>
                        {/* <label htmlFor="cc-exp">Expiration MM/YY</label> */}
                        <input id="cc-exp" name="cc-exp" autoComplete="cc-exp" type="text" placeholder="Expiration MM/YY" aria-label="Expiration MM/YY"></input>
                        {/* <label htmlFor="cc-csc">Security Code</label> */}
                        <input id="cc-csc" name="cc-csc" autoComplete="cc-csc" type="text" placeholder="Security Code" aria-label="Security Code"></input>


                        Billing Address
                        - radio same as shipping address
                        - radio use a different billing address
                </div>

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
