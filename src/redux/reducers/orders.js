import {
    GET_ORDERS_BEGIN,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE
  } from '../actionTypes';
  
  const initialState = {
    orders: [],
    loading: false,
    error: null
  };
  
  export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ORDERS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case GET_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: action.payload
        };
  
      case GET_ORDERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          orders: []
        };
  
      default:
        return state;
    }
  }