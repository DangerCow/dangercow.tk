import React from 'react'
import ReactDOM from 'react-dom'
import p5 from 'p5'
import styles from './styles.css'

var canvas

class SketchWindow extends React.Component{
  constructor(props){
    super(props)
    this.SketchRef = React.createRef()
  }

  //Animated background
  Sketch = (p) => {
    let points = []

    let x = p.windowWidth / 2
    let y = p.windowHeight / 2

    let t = 0
    let drawTimer = 0;
    let drawTimerLength = 1;
    let noiseScale = 4;

    p.windowResized = () => {
      //resize the canvas if the window is resized
      p.resizeCanvas(p.windowWidth, p.windowHeight)
    }

    p.setup = () => {
      //create background canvas
      canvas = p.createCanvas(p.windowWidth, p.windowHeight)
      canvas.position(0, 0)
      canvas.style('z-index', '-1')
      p.frameRate(60)
    }

    p.draw = () => {
      let colorA = p.color(152, 255, 152);
      let colorB = p.color(252, 188, 184);
      let color = p.lerpColor(colorA, colorB, (p.sin(t) + 1) / 2)
      p.background(color)

      //if array gets too big reset
      if(points.length >= 400) points = []

      //move xy
      p.noiseDetail(2, 0.2)

      let noiseX = p.noise(t * noiseScale, 0)
      let noiseY = p.noise(0, t * noiseScale)

      x = p.sin(noiseX * 2) * p.windowWidth
      y = p.sin(noiseY * 2) * p.windowHeight

      let currentPoint = [x, y]

      //if there are no points in the list add a default one so nothing breaks :)
      if (points.length == 0) points.push(currentPoint)
      
      //if the draw timer is up add current position as new point
      if (drawTimer >= drawTimerLength){
        drawTimer = 0
        points.push(currentPoint)
      }

      //draw points
      for (let i = 1; i < points.length + 1; i++) {
        let lastPoint = points[i - 1]
        let point = currentPoint

        if(i != points.length) point = points[i]

        let cos = p.cos(t) * 100
        
        colorA = p.color(152 - cos, 255 - cos, 152 - cos);
        colorB = p.color(252 - cos, 188 - cos, 184 - cos);

        let strokeColor = p.lerpColor(colorA, colorB, (p.sin(t * -1) + 1) / 2)
        strokeColor.r -= cos * 100
        p.stroke(strokeColor)
        p.strokeWeight((p.abs(p.sin(t)) * 4) + 1)
        p.line(lastPoint[0], lastPoint[1], point[0], point[1])
      }

      drawTimer += 1
      console.log(p.deltaTime)
      t += p.deltaTime / 2500
    }
  }

  //Mount background onto html
  componentDidMount() {
    this.P5Sketch = new p5(this.Sketch, this.SketchRef.current)
  }

  //Render comp
  render() {
    return (
      <div ref = {this.SketchRef}>
        <div className = 'Center'>
          <h1>DANGER COW</h1>
          
          <p>Website under construction :)</p>
        </div>
      </div>
    )
  }
}

//render page
ReactDOM.render(
  <SketchWindow name="" />,
  document.getElementById('root')
);