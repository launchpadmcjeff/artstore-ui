import React from 'react';
import './App.css';
import ProductsList from './ProductsList'
import ShoppingStatus from './ShoppingStatus'
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App constructor');
  }


  render() {

    return (
      <div className="App">
        <header>
          <Link to="/cart">Cart</Link>
          <ShoppingStatus />
          <h1>The Artstore</h1>
        </header>

        <ProductsList />

        <footer>

          <button onClick={this.getProducts}>
            getProducts
</button>
          <button onClick={this.getOrders}>
            getOrders
</button>
          <button onClick={this.getOrders99}>
            getOrders99
</button>
          <button onClick={this.postOrders}>
            postOrders
</button>
        </footer>

      </div>

    );
  }


  getProducts = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/artstore/rest/products', { headers: { 'Content-Type': 'application/json' } });
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));

  }
  getOrders99 = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/artstore/rest/orders/99', { headers: { 'Content-Type': 'application/json' } });
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));

  }
  getOrders = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/artstore/rest/orders', { headers: { 'Content-Type': 'application/json' } });
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));

  }

  // Example POST method implementation:
  postOrders = async (e) => {
    e.preventDefault();
    try {
      const data = await this.postData('http://localhost:8080/artstore/rest/orders', {});
      console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
    } catch (error) {
      console.error(error);
    }
  }

  postData = async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
}

export default App;
