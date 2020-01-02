import { combineReducers } from "redux";
import shipping from "./shipping";
import bar from "./bar";
import cart from './cart';
import products from './products';

export default combineReducers({ shipping, bar, cart, products });
