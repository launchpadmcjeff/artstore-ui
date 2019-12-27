import { ADD_TO_CART } from "../actionTypes";
const initialState = {
  allIds: [],
  byIds: {}
};

const bar = (state = initialState, action) => {
  console.log('bar reducer');
    switch (action.type) {
      case ADD_TO_CART: {
        return action.payload.filter;
      }
      default: {
        return state;
      }
    }
  };
  
  export default bar;