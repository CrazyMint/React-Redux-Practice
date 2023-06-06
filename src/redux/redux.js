import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const incrementByOne = {
	type: "INCREASE_NUMBER_BY_ONE",
};

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREASE_NUMBER_BY_ONE":
			return { counter: state.counter + 1 };
		default:
			return state;
	}
};

export const store = createStore(reducer, composeWithDevTools());
