import React from "react";
import { connect } from "react-redux";
import ProductHook from './ProductHook'

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }


  render() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const listItems = numbers.map((number) =>
      <ProductHook key={number.toString()} id={number.toString()} />
    );

    return (
      <div className="Products-list">
        {listItems}
      </div>
    );
  }
}

export default connect()(ProductsList);
