import { ADD_TO_CART } from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {}
};

const bar = (state = initialState, action) => {
  console.log('bar reducer');
    switch (action.type) {
      case ADD_TO_CART: {
        return state;
      }
      default: {
        return state;
      }
    }
  };
  
  export default bar;