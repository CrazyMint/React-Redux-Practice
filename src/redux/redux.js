import { createStore } from "redux";

export const increment = {
  type: "INCREASE_NUMBER_BY_ONE"
};

const initialState = { counter: 0 };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER_BY_ONE":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);
