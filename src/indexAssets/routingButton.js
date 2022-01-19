import React from "react";
import ReactDOM from "react-dom";

export class RoutingButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colorBack: "#ffa69e",
			colorFore: "#09e85e",
			hoverBack: "#000000",
			hoverFore: "#ffffff",
			hover: false,
		};
		this.toggleHover = this.toggleHover.bind(this);
		this.tick = 0;
	}

	swapColors() {
		let colorA = this.state.colorBack;
		let colorB = this.state.colorFore;

		this.setState((state) => ({
			colorBack: colorB,
			colorFore: colorA,
		}));
	}

	breath() {
		this.tick += 0.05;
		let valuea = Math.sin(this.tick) * 255 + 255 / 2;
		let valueb = Math.cos(this.tick) * 255 + 255 / 2;

		this.setState((state) => ({
			hoverBack: "rgb(" + valuea + ", " + valuea + ", " + valuea + ")",
			hoverFore: "rgb(" + valueb + ", " + valueb + ", " + valueb + ")",
		}));
	}

	toggleHover() {
		this.tick = -0.9;
		this.setState((state) => ({
			hover: !this.state.hover,
		}));
	}

	componentDidMount() {
		this.colorSwapTimer = setInterval(() => this.swapColors(), 4000);
		this.breathTimer = setInterval(() => this.breath(), 25);
	}

	componentWillUnmount() {
		clearInterval(this.colorSwapTimer);
		clearInterval(this.breathTimer);
	}

	render() {
		let style;

		if (this.state.hover == false) {
			style = {
				backgroundColor: this.state.colorBack,
				color: this.state.colorFore,
			};
		} else {
			style = {
				backgroundColor: this.state.hoverBack,
				color: this.state.hoverFore,
			};
		}

		return (
			<button
				style={style}
				className="RoutingButton"
				onClick={this.props.onClick}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				{this.props.name}
			</button>
		);
	}
}
