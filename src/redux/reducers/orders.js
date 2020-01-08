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
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case GET_ORDERS_SUCCESS:
        console.log("GET_ORDERS_SUCCESS " + JSON.stringify(action.payload));
        // All done: set loading "false".
        // Also, replace the orders with the ones from the server
        return {
          ...state,
          loading: false,
          orders: action.payload
        };
  
      case GET_ORDERS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have orders to display anymore, so set `orders` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the orders around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          orders: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }