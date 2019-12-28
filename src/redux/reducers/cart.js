import { ADD_TO_CART } from "../actionTypes";
const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('cart reducer: ' + JSON.stringify(state));
      console.log('action.type: ' + JSON.stringify(action.type));

      const { item } = action.payload;
      return [...state, item];
    }
    default: {
      return state;
    }
  }
};

export default cart;