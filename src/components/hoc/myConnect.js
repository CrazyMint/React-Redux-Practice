import { store } from "../../redux/redux";

import React, { Component } from "react";

export const myConnect =
	(mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
		// const { state } = store.getState();
		return class myConnect extends Component {
			constructor(props) {
				super(props);
				this.state = {
					...mapStateToProps(store.getState()),
					...mapDispatchToProps(store.dispatch),
				};
			}
			componentDidMount() {
				store.subscribe(() => {
					this.setState(mapStateToProps(store.getState()));
				});
			}

			render() {
				return <WrappedComponent {...this.props} {...this.state} />;
			}
		};
	};
