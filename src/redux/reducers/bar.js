import { ADD_TO_CART } from "../actionTypes";
const initialState = {
  cart: []
};

const bar = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('bar reducer: ' + JSON.stringify(state));
      console.log('action.type: ' + JSON.stringify(action.type));

      const { item } = action.payload;
      return {
        ...state,
        cart: [...state.cart, item]
      }
    }
    default: {
      return state;
    }
  }
};

export default bar;