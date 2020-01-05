import React from "react";
import { connect } from "react-redux";
import { addToCart } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



class ProductHook extends React.Component {
  render() {
    return (
      <div className="Product-hook">
        <img src={'http://localhost:8080/artstore/img/' + this.props.imageId + '.jpg'} alt={this.props.name} />
        <h2>
          {this.props.name}
        </h2>
        <h3>
          {(this.props.price / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
        </h3>
        <button onClick={this.addToCart}>
          <FontAwesomeIcon icon={faCartPlus} size="2x" color="#f3cd14" />
        </button>
      </div>
    )
  }

  addToCart = async (e) => {
    e.preventDefault();
    this.props.addToCart(this.props.id, this.props.name, this.props.price);
  }
}

export default connect(
  null,
  { addToCart }
)(ProductHook);