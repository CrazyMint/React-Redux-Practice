import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, getInitCounter, increment } from "../slices/counterSlice";

import { useEffect } from "react";

export default function Counter() {
	const counter = useSelector((state) => state.counter.counter);

	const isLoading = useSelector((state) => state.counter.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		// console.log(getInitCounter());
		dispatch(getInitCounter());
	}, []);

	const handleClickAdd = () => {
		console.log("clicked add");
		dispatch(increment());
	};

	const handleClickDecrease = () => {
		console.log("clicked decrease");
		dispatch(decrement());
	};

	return (
		<>
			{isLoading ? <p>...</p> : <p>{counter}</p>}
			<button onClick={handleClickAdd}>add one</button>
			<button onClick={handleClickDecrease}>decrease one</button>
		</>
	);
}
