import { ADD_TO_CART } from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {}
};
const foo = (state = initialState, action) => {
    console.log('foo reducer');
    switch (action.type) {
      case ADD_TO_CART: {
        return action.payload.filter;
      }
      default: {
        return state;
      }
    }
  };
  
  export default foo;