import { UPDATE_PAYMENT } from "../actionTypes";
const initialState = {};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAYMENT: {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
};

export default payment;