import React from "react";
import { connect } from "react-redux";
import ProductHook from './ProductHook'
import { fetchProducts } from "../redux/actions";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      console.log('ProductsList Loading...');
      return <div>Loading...</div>;
    }

    console.log('ProductsList: ' + products);
    return (
      <div className="Products-list">
        {products.map(product =>
          <ProductHook id={product.id} key={product.id}></ProductHook>
        )}
      </div>
    );
  }

  // render() {
  //   const numbers = [1, 2, 3, 4, 5, 6];
  //   const listItems = numbers.map((number) =>
  //     <ProductHook key={number.toString()} id={number.toString()} />
  //   );

  //   return (
  //     <div className="Products-list">
  //       {listItems}
  //     </div>
  //   );
  // }
}

const mapStateToProps = state => {console.log('ProductList mapStateToProps: ' + JSON.stringify(state)); return {
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
}};

export default connect(mapStateToProps)(ProductsList);
