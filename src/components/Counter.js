import React from "react";
import { connect } from "react-redux";
import { incrementByOne } from "../redux/redux";
import { myConnect } from "./hoc/myConnect";

class Counter extends React.Component {
	handleClick = () => {
		this.props.increment();
	};

	render() {
		const { counter } = this.props;
		console.log("counter:", counter);
		return (
			<>
				<p>{counter}</p>
				<button onClick={this.handleClick}>add one</button>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	const { counter } = state;
	return {
		counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log(incrementByOne);
	return {
		increment: () => dispatch(incrementByOne),
	};
};

export default myConnect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
