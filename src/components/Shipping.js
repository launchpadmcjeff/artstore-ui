import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';

export class Shipping extends Component {
    render() {
        return (
            <div className="Shipping">
                <Header />
                <div className="container">

                <h1>Shipping</h1>
                Contact Information
                - email
                - check Keep me up to date on news and exclusive offers

                Shipping Address
                - First Name
                - Last Name
                - Company (Optional)
                - Address
                - Apt, Suite, etc (Optional)
                - City
                - State
                - Zip
                - Phone (Optional)

                Shipping Method
                - USPS Priority Mail

                Remember Me
                - check Save my information for a faster checkout
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

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
