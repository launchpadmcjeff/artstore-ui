import {
  ADD_TO_CART, REMOVE_FROM_CART,
  SUBMIT_ORDER_BEGIN,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILURE
} from "../actionTypes";

const initialState = {
  itemCount: 0,
  lineItems: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  discountCodes: [],
  loading: false,
  error: null
};

const retSums = (lineItems) => {
  const subtotal = lineItems.map(i => i.price).reduce((r, i) => r + i, 0);
  const tax = Math.round(subtotal * .06);
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

const cart = (state = initialState, action) => {
  switch (action.type) {

    case SUBMIT_ORDER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SUBMIT_ORDER_SUCCESS:
      return Object.assign({}, initialState);

    case SUBMIT_ORDER_FAILURE:
      return {
        ...state,
        loading: false
      };

    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      const lineItems = state.lineItems.filter((i, index) => index !== id);
      const retSumz = retSums(lineItems);
      return Object.assign({}, state, { itemCount: lineItems.length }, retSumz, { lineItems: lineItems });
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

      return Object.assign({}, state, { itemCount: lineItems.length }, retSumz, { lineItems });
    }

    default: {
      return state;
    }
  }
};

export default cart;