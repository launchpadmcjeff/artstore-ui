import { ADD_TO_CART } from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {}
};
const foo = (state = initialState, action) => {
    console.log('foo reducer');
    switch (action.type) {
      case ADD_TO_CART: {
        return state;
      }
      default: {
        return state;
      }
    }
  };
  
  export default foo;