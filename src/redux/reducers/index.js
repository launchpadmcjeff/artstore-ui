import { combineReducers } from "redux";
import foo from "./foo";
import bar from "./bar";
import cart from './cart';

// export default combineReducers({ foo });
export default combineReducers({ foo, bar, cart });
