import { combineReducers } from "redux";
import shipping from "./shipping";
import payment from "./payment";
import cart from './cart';
import products from './products';

export default combineReducers({ products, cart, shipping, payment });
