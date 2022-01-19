import p5 from "p5";

var canvas;

export let Sketch = (p) => {
	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	};

	p.setup = () => {
		canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
		canvas.position(0, 0);
		canvas.style("z-index", "-1");
		p.frameRate(30);
	};

	p.draw = () => {
		p.background(0);
		p.rotateY(p.frameCount * 0.01);
		p.normalMaterial();

		for (let j = 0; j < 5; j++) {
			p.push();
			for (let i = 0; i < 80; i++) {
				p.translate(
					p.sin(p.frameCount * 0.001 + j) * 100,
					p.sin(p.frameCount * 0.001 + j) * 100,
					i * 0.1
				);
				p.rotateZ(p.frameCount * 0.002);
				p.push();
				p.sphere(8, 6, 4);
				p.pop();
			}
			p.pop();
		}
	};
};
