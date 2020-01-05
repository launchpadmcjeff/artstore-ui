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
        ${this.props.price / 100}
        </h3>


        <button onClick={this.getOrders99}>
          <FontAwesomeIcon icon={faCartPlus} size="2x" color="#f3cd14" />
        </button>
      </div>
    )
  }

   getOrders99 = async (e) => {
    e.preventDefault();
    console.log('getOrders99: ' + this.props.id);
    this.props.addToCart(this.props.id, this.props.name, this.props.price);
    // this.setState({ item: this.props.id });
    const response = await fetch('http://localhost:8080/artstore/rest/orders/99', { headers: { 'Content-Type': 'application/json' } });
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
  }
}

export default connect(
  null,
  { addToCart }
)(ProductHook);