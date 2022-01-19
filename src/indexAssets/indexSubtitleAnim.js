import React from "react";
import ReactDOM from "react-dom";

export class SubtitleAnim extends React.Component {
	constructor(props) {
		super(props);
		this.state = { way: "", noway: "               " };
	}

	tick() {
		if (this.state.way.length < 15) {
			this.setState((state) => ({
				way: this.state.way + "y",
				noway: this.state.noway.slice(1),
			}));
		} else {
			clearInterval(this.interval);
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.interval = setInterval(() => this.tick(), 100);
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		let autoMargin = {
			marginRight: this.state.noway.length * 1.55 + "vw",
		};

		return (
			<div id="Subtitle" className="Center">
				<p style={autoMargin}>
					A creative teenager with way{this.state.way} too much free
					time
				</p>
			</div>
		);
	}
}
