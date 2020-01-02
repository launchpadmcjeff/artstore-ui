import { UPDATE_SHIPPING } from "../actionTypes";
const initialState = {'news-and-offers': true, 'save-info': true};

const shipping = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHIPPING: {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
};

export default shipping;