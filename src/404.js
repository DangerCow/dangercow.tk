import react from "react";
import styles from "./styles.css";

export class NoPage extends react.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>hmm looks like thats not a real page dumbo :(</h1>
				<a href="./">
					<h1>take me home</h1>
				</a>
			</div>
		);
	}
}
