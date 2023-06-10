import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInitCounterApi } from "../api/counterApi";

const initialState = {
	counter: 0,
	isLoading: false,
};

// action creator
export const getInitCounter = createAsyncThunk(
	"counterSlice/getInitCounter",
	async (args, thunkAPI) => {
		const initCounter = await getInitCounterApi();
		return initCounter;
	}
);

export const counterSlice = createSlice({
	name: "counterSlice",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.counter++;
		},
		decrement: (state) => {
			state.counter--;
		},
		update: (state, action) => {
			state.counter = action.payload;
		},
	},
	// extraReducers: {
	// 	[getInitCounter.pending]: (state, action) => {
	// 		state.isLoading = true;
	// 	},
	// 	[getInitCounter.fulfilled]: (state, action) => {
	// 		state.isLoading = false;
	// 		state.counter = action.payload;
	// 	},
	// 	[getInitCounter.rejected]: (state, action) => {
	// 		state.isLoading = false;
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(getInitCounter.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getInitCounter.fulfilled, (state, action) => {
				// console.log(action);
				state.isLoading = false;
				state.counter = action.payload;
			})
			.addCase(getInitCounter.rejected, (state, action) => {
				state.isLoading = false;
			});
	},
});

export const { increment, decrement, update } = counterSlice.actions;

// action creator
// export const getInitCounter = () => async (dispatch) => {
// 	const initCounter = await getInitCounterApi();
// 	dispatch(update(initCounter));
// };

export default counterSlice.reducer;
