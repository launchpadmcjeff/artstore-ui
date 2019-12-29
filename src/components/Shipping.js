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
