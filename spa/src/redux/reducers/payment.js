import { UPDATE_PAYMENT } from "../actionTypes";
const initialState = {
  'cc-number': '',
  'cc-name': '',
  'cc-exp': '',
  'cc-csc': '',
  'billing-eq-shipping': 'true',
  'email': '',
  'given-name': '',
  'family-name': '',
  'organization': '',
  'address-line1': '',
  'address-line2': '',
  'address-level2': '',
  'address-level1': '',
  'postal-code': '',
  'tel-national': ''

};

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