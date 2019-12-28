import React from 'react';
import './App.css';
import ProductsList from './ProductsList'
import Header from './Header'
import { Footer } from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App constructor');
  }


  render() {

    return (
      <div className="App">
        <Header />
        <ProductsList />
        <Footer />
      </div>

    );
  }

}

export default App;
