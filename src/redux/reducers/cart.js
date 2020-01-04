import { ADD_TO_CART } from "../actionTypes";
const initialState = {
  itemCount: 0,
  lineItems: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  discountCodes: []
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('cart reducer: ' + JSON.stringify(state));
      console.log('action.type: ' + JSON.stringify(action.type));

      const { item } = action.payload;

      let lineItem = {
        id: item,
        name: '',
        quantity: 0,
        unitPrice: 0,
        totalPrice: 0

      };

      return Object.assign({}, state, {itemCount: state.itemCount + 1}, {lineItems: [...state.lineItems, lineItem]});
    }
    default: {
      return state;
    }
  }
};

export default cart;