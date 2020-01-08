import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";
const initialState = {
  itemCount: 0,
  lineItems: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  discountCodes: []
};

const retSums = (lineItems) => {
  const subtotal = lineItems.map(i => i.price).reduce((r, i) => r + i, 0);
  const tax = Math.round(subtotal * .06);
  const total = subtotal + tax;
  return {subtotal, tax, total};
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      const lineItems = state.lineItems.filter(i => i.id !== id);
      const retSumz = retSums(lineItems);
      return Object.assign({}, state, { itemCount: lineItems.length}, retSumz, { lineItems: lineItems });
      ;
    }
    case ADD_TO_CART: {
      const { id, name, price } = action.payload;

      let lineItem = {
        id: id,
        name: name,
        price: price
      };

      const lineItems = [...state.lineItems, lineItem];
      const retSumz = retSums(lineItems);

      return Object.assign({}, state, { itemCount: lineItems.length}, retSumz, { lineItems });
    }
    default: {
      return state;
    }
  }
};

export default cart;