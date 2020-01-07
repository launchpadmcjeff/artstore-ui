import { UPDATE_SHIPPING } from "../actionTypes";
const initialState = {
  'email': '',
  'given-name': '',
  'family-name': '',
  'organization': '',
  'address-line1': '',
  'address-line2': '',
  'address-level2': '',
  'address-level1': '',
  'postal-code': '',
  'tel-national': '',
  'shipping-method': '',
  'news-and-offers': true,
  'save-info': true
};

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