import { BAR } from "../actionTypes";
const initialState = {};

const bar = (state = initialState, action) => {
  switch (action.type) {
    case BAR: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default bar;