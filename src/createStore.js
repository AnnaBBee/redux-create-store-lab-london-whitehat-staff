import candyReducer from "./reducers/candyReducer";
import countReducer from "./reducers/countReducer";

export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action);
  }

  function getState() {
    console.log(state);
    return state;
  }

  return {
    dispatch,
    getState
  };
}

let store = createStore(candyReducer);
let store2 = createStore(countReducer);

store.dispatch({ type: "@@INIT" });
store2.dispatch({ type: "@@INIT" });
