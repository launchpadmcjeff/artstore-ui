import { combineReducers } from "redux";
import foo from "./foo";
import bar from "./bar";
import cart from './cart';
import products from './products';

export default combineReducers({ foo, bar, cart, products });
