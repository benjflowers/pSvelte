let sketch = p5 => {
  var t = .01
  p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.background(60, 40, 800);
  }

  p5.draw = () => {
    let stroke = p5.noise(t) * 120
    p5.stroke(100,stroke,20);
    p5.translate(p5.width/2, p5.height/2)
    p5.line(0, 0, p5.cos(t) * 80, p5.sin(t) * 80);

    t += .01;
  }
}

export default sketch