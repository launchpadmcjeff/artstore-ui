import React from 'react';
import ProductsList from './ProductsList'
import Header from './Header'
import { Footer } from './Footer';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <div className="container">
          <ProductsList />
        </div>
        <Footer />
      </div>

    );
  }

}

export default App;
