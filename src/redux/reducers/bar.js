import { BAR } from "../actionTypes";
const initialState = {};

const bar = (state = initialState, action) => {
  console.log('bar reducer: ' + JSON.stringify(state));
  switch (action.type) {
    case BAR: {
      console.log('bar reducer: ' + JSON.stringify(state));
      console.log('action.type: ' + JSON.stringify(action.type));

      return state;
    }
    default: {
      return state;
    }
  }
};

export default bar;