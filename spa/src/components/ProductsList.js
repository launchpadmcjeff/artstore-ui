import React from "react";
import { connect } from "react-redux";
import ProductHook from './ProductHook'
import { fetchProducts } from "../redux/actions";

class ProductsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Products-list">
        {products.map(product =>
          <ProductHook key={product.id} id={product.id} imageId={product.imageId} name={product.name} price={product.price}></ProductHook>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductsList);
