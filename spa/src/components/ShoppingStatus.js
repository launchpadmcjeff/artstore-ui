import React, { Component } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";

class ShoppingStatus extends Component {
    render() {
        return (
            <div className="Shopping-status">
                <span>{this.props.itemCount}</span>
                <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { itemCount: state.cart.itemCount };
};

export default connect(
    mapStateToProps
)(ShoppingStatus);