let sketch = p5 => {
  var t = .01
  p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.background(60, 40, 200);
  }

  p5.draw = () => {
    p5.stroke(`rgb(100, ${p5.noise(t) * 180}, 50)`)
    p5.translate(p5.width/2, p5.height/2)
    p5.line(0, 0, p5.cos(t) * 60, p5.sin(t) * 60);

    t += .01;
  }
}

export default sketch