import { FOO } from "../actionTypes";
const initialState = "";

const foo = (state = initialState, action) => {
    console.log('foo reducer: ' + JSON.stringify(state));
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