function candyReducer(state = [], action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

export default candyReducer;

