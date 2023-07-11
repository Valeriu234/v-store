import React from "react";

export class ErrorBoundaryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: undefined };
	}

	static getDerivedStateFromError(error) {
		// Update state to indicate an error has occurred
		return { hasError: true, error: error };
	}

	componentDidCatch(error, info) {
		// You can log the error or send it to an error tracking service
		alert(`${error} : ${info}`);
	}

	render() {
		if (this.state.hasError) {
			// Render fallback UI when an error occurs
			return <h1>{this.state.error}.</h1>;
		}

		// Render children components as normal
		return this.props.children;
	}
}
