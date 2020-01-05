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

      const { id, name, price } = action.payload;

      let lineItem = {
        id: id,
        name: name,
        price: price
      };

      const subtotal = (state.subtotal * 100 + lineItem.price * 100) / 100;

      const tax = (Math.round((subtotal * .06) * 100) / 100);
      
      const total = subtotal + tax;

      return Object.assign({}, state, {itemCount: state.itemCount + 1, subtotal: subtotal, tax: tax, total: total}, {lineItems: [...state.lineItems, lineItem]});
    }
    default: {
      return state;
    }
  }
};

export default cart;