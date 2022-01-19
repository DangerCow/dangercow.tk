import React from "react";
import p5 from "p5";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import nowStyles from "./nowAssets/nowStyles.css";
import { Sketch } from "./nowAssets/nowBackground";

export class WhatsNowPage extends React.Component {
	constructor(props) {
		super(props);
		this.SketchRef = React.createRef();
	}

	componentDidMount() {
		this.P5Sketch = new p5(Sketch, this.SketchRef.current);
	}

	render() {
		return [
			<div id="Title" className="Center">
				<h1 className="norm">WHATS NOW?</h1>
				<div style={{ marginTop: 60 }}>
					<h2 className="norm">* Working on an album</h2>
					<h2 className="norm">* Working on this sexy website</h2>
					<h2 className="norm">* Playing Echo Arena competitivly</h2>
				</div>
				<a
					className="normInvert"
					style={{
						position: "fixed",
						left: "0px",
						bottom: "0px",
						height: "80px",
						width: "100%",
					}}
					href="https://nownownow.com/about"
				>
					More about "now" pages
				</a>
			</div>,
			<div ref={this.SketchRef}></div>,
		];
	}
}
