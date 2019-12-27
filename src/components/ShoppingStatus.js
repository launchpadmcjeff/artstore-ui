import React, { Component } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ShoppingStatus extends Component {
    render() {
        return (
            <div className="Shopping-status">
            <FontAwesomeIcon icon={faShoppingCart} className="p-1" color="#fff" />

          </div>
        )
    }
}
