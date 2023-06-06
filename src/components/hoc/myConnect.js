import { store } from "../../redux/redux";

import React, { Component } from "react";

export const myConnect =
	(mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
		// const { state } = store.getState();
		return class extends Component {
			constructor(props) {
				super(props);
			}
			componentDidMount() {
				this.unsubscribe = store.subscribe(() => {
					this.forceUpdate();
				});
			}

			componentWillUnmount() {
				this.unsubscribe();
			}

			render() {
				return (
					<WrappedComponent
						{...this.props}
						{...mapStateToProps(store.getState())}
						{...mapDispatchToProps(store.dispatch)}
					/>
				);
			}
		};
	};
