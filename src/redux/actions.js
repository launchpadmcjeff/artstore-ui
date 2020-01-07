import {
  ADD_TO_CART, UPDATE_SHIPPING, UPDATE_PAYMENT, FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  SUBMIT_ORDER_BEGIN, SUBMIT_ORDER_SUCCESS, SUBMIT_ORDER_FAILURE
} from "./actionTypes";

export const addToCart = (id, name, price) => ({
  type: ADD_TO_CART,
  payload: {
    id,
    name,
    price
  }
});

export const updateShipping = shipping => ({
  type: UPDATE_SHIPPING,
  payload: shipping
});

export const updatePayment = payment => ({
  type: UPDATE_PAYMENT,
  payload: payment
});

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch('http://localhost:8080/artstore/rest/products', { headers: { 'Content-Type': 'application/json' } })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}
export const submitOrderBegin = () => ({
  type: SUBMIT_ORDER_BEGIN
});

export const submitOrderSuccess = order => ({
  type: SUBMIT_ORDER_SUCCESS,
  payload: order
});

export const submitOrderFailure = error => ({
  type: SUBMIT_ORDER_FAILURE,
  payload: { error }
});

export function submitOrder(data) {
  return dispatch => {
    dispatch(submitOrderBegin());
    console.log(JSON.stringify(data));
    // const data = {};
    return fetch('http://localhost:8080/artstore/rest/orders', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(submitOrderSuccess(json));
        return json;
      })
      .catch(error => dispatch(submitOrderFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}