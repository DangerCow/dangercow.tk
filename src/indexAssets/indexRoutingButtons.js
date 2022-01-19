import React from "react";
import ReactDOM from "react-dom";
import { RoutingButton } from "./routingButton";

export class RoutingButtons extends React.Component {
	constructor(props) {
		super(props);
		this.whatsNowButton = (
			<RoutingButton onClick={this.props.nowOnClick} name="What's now" />
		);
	}

	render() {
		return (
			<div id="RoutingButtons" className="Center">
				{this.whatsNowButton}
			</div>
		);
	}
}
