import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
    render() {
        return (
            <div>
                <h1>CART</h1>
                <Link to="/">Catalog</Link>
            </div>
        )
    }
}

export default connect()(Cart);