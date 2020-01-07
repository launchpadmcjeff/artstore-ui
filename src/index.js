import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import Root from './components/Root'
import { submitOrder } from './redux/actions'


ReactDOM.render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const foo = () => {
    console.log('hello: ' + JSON.stringify(store.getState().shipping));
    // store.dispatch(submitOrder());

};

setInterval(foo, 600000);

const bar = () => {
    console.log(store.getState());
}
const unsubscribe = store.subscribe(bar);
