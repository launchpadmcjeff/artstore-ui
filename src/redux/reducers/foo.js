import { FOO } from "../actionTypes";
const initialState = "";

const foo = (state = initialState, action) => {
  switch (action.type) {
    case FOO: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default foo;