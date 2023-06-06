import React from "react";
import { connect } from "react-redux";
import { increment } from "../redux/redux";

class Counter extends React.Component {
  handleClick = () => {
    this.props.increment();
  };

  render() {
    const { counter } = this.props;
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
    counter
  };
};

const mapDispatchToProps = (dispatch) => {
  const obj = {
    increment: () => dispatch(increment)
  };
  return obj;
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
