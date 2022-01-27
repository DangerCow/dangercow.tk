import React from "react";
import ReactDOM from "react-dom";
import p5 from "p5";
import styles from "./styles.css";
import { Sketch } from "./indexAssets/indexVisual.js";
import { SubtitleAnim } from "./indexAssets/indexSubtitleAnim.js";
import { RoutingButtons } from "./indexAssets/indexRoutingButtons.js";
import { WhatsNowPage } from "./now.js";
import { NoPage } from "./404.js";

let routes;
function switchPage(page) {
	window.location.pathname = page;
}

class Website extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let page = <NoPage />;

		for (let i = 0; i < routes.length; i++) {
			const route = routes[i];

			if (window.location.pathname == route.dir) {
				page = route.comps;
			}
		}

		return page;
	}
}

class MainPage extends React.Component {
	//construct ref for the sketch to sit in
	constructor(props) {
		super(props);
		this.SketchRef = React.createRef();
		this.whatsNowRedirect = this.whatsNowRedirect.bind(this);

		this.routingButtons = (
			<RoutingButtons nowOnClick={this.whatsNowRedirect} name="" />
		);
	}

	whatsNowRedirect() {
		this.props.switchPage("now");
	}

	//mount sketch onto the ref
	componentDidMount() {
		this.P5Sketch = new p5(Sketch, this.SketchRef.current);
	}

	//Render everything
	render() {
		return (
			<div ref={this.SketchRef}>
				<div className="SlideDown">
					<div id="Title" className="Center">
						<h1>DANGER COW</h1>
						<SubtitleAnim switchPage={switchPage} name="" />
					</div>

					{this.routingButtons}
				</div>
			</div>
		);
	}
}

routes = [
	{
		dir: "/",
		comps: [<MainPage switchPage={switchPage} name="" />],
	},
	{
		dir: "/now",
		comps: [<WhatsNowPage name="" />],
	},
];

//render page
ReactDOM.render(<Website name="" />, document.getElementById("root"));
