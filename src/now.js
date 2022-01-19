import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import nowStyles from "./nowAssets/nowStyles.css";
import { Canvas, useFrame } from "@react-three/fiber";
import FullScreen from "react-fullscreen";

let t = 0;

function Box(props) {
	const mesh = useRef();

	useFrame((state, delta) => {
		t++;

		mesh.current.rotation.x += 0.01;
		mesh.current.rotation.y += 0.005;

		state.camera.lookAt(0, 0, 0);
		state.camera.position.x = Math.sin(t / 400) * 10;
		state.camera.position.z = Math.sin(t / 100) * 10 + 4;
	});

	return (
		<mesh {...props} ref={mesh} scale={(1, 1, 1)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="green" />
		</mesh>
	);
}

class VisCanvas extends React.Component {
	render() {
		return (
			<Canvas
				camera={{ position: [0, 0, 0], fov: 10 }}
				style={{
					width: this.props.width,
					height: this.props.height,
					position: "absolute",
					left: "0px",
					top: "0px",
					zIndex: -1,
				}}
			>
				<Box position={[0, 0, 0]} />
				<ambientLight />
				<pointLight position={[10, 10, 10]} color="red" power={40} />
			</Canvas>
		);
	}
}

export class WhatsNowPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

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
			<FullScreen>
				<VisCanvas />
			</FullScreen>,
		];
	}
}
