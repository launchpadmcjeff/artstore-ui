import React, { Component } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";

class ShoppingStatus extends Component {
    render() {
        return (
            <div className="Shopping-status">
            <FontAwesomeIcon icon={faShoppingCart} className="p-1" color="#fff" />

          </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps: ' + JSON.stringify(state));
    return {};
  };

export default connect(
    mapStateToProps
  )(ShoppingStatus);