const counterReducer = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + state;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
