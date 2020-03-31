let sketch = p5 => {
   p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.background(80, 200, 20);
  }

  p5.draw = () => {
    p5.strokeWeight(p5.random(8))
    p5.point(p5.random(p5.width), p5.random(p5.height));
  }
}

export default sketch
