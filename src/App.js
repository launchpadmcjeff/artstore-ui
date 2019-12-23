import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function ProductHook(props) {
  let url = 'http://localhost:8080/artstore/img/' + props.id + '.jpg';
  return (
    <div className="Product-hook">
    <img src={url} alt="Van Gogh Self Portrait" />

    <button onClick={getOrders99}>
      <FontAwesomeIcon icon={faCartPlus} size="4x" color="#f3cd14" />
    </button>
  </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Shopping-status">
          <FontAwesomeIcon icon={faShoppingCart} className="p-1" color="#fff" />

        </div>
        <h1>The Artstore</h1>
        {/* <FontAwesomeIcon icon={faCoffee} className="p-1" /> */}
      </header>
      <div className="Product-hook">
        <img src="http://localhost:8080/artstore/img/1.jpg" alt="Van Gogh Self Portrait" />

        <button onClick={getOrders99}>
          <FontAwesomeIcon icon={faCartPlus} size="4x" color="#f3cd14" />
        </button>
      </div>
      <div className="Product-hook">
        <img src="http://localhost:8080/artstore/img/2.jpg" alt="Van Gogh Self Portrait" />

        <button onClick={getOrders99}>
          <FontAwesomeIcon icon={faCartPlus} size="4x" color="#f3cd14" />
        </button>
      </div>
      <div className="Product-hook">
        <img src="http://localhost:8080/artstore/img/3.jpg" alt="Van Gogh Self Portrait" />

        <button onClick={getOrders99}>
          <FontAwesomeIcon icon={faCartPlus} size="4x" color="#f3cd14" />
        </button>
      </div>
      <div className="Product-hook">
        <img src="http://localhost:8080/artstore/img/4.jpg" alt="Van Gogh Self Portrait" />

        <button onClick={getOrders99}>
          <FontAwesomeIcon icon={faCartPlus} size="4x" color="#f3cd14" />
        </button>
      </div>
      <div className="Product-hook">
        <img src="http://localhost:8080/artstore/img/5.jpg" alt="Van Gogh Self Portrait" />

        <button onClick={getOrders99}>
          <FontAwesomeIcon icon={faCartPlus} size="4x" color="#f3cd14" />
        </button>
      </div>
      <div className="Product-hook">
        <img src="http://localhost:8080/artstore/img/6.jpg" alt="Van Gogh Self Portrait" />

        <button onClick={getOrders99}>
          <FontAwesomeIcon icon={faCartPlus} size="4x" color="#f3cd14" />
        </button>
      </div>

<ProductHook id="3"/>

      <button onClick={getProducts}>
        getProducts
</button>
      <button onClick={getOrders}>
        getOrders
</button>
      <button onClick={getOrders99}>
        getOrders99
</button>
      <button onClick={postOrders}>
        postOrders
</button>

    </div>
  );
}

async function getProducts(e) {
  e.preventDefault();
  const response = await fetch('http://localhost:8080/artstore/rest/products', { headers: { 'Content-Type': 'application/json' } });
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));

}
async function getOrders99(e) {
  e.preventDefault();
  const response = await fetch('http://localhost:8080/artstore/rest/orders/99', { headers: { 'Content-Type': 'application/json' } });
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));

}
async function getOrders(e) {
  e.preventDefault();
  const response = await fetch('http://localhost:8080/artstore/rest/orders', { headers: { 'Content-Type': 'application/json' } });
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));

}

// Example POST method implementation:
async function postOrders(e) {
  e.preventDefault();
  try {
    const data = await postData('http://localhost:8080/artstore/rest/orders', {});
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }
}

async function postData(url = '', data = {}) {
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

export default App;
