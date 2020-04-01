let sketch = p5 => {

  var inc = .01;
  var scl = 100;
  var rows;// = p5.floor(p5.height*scl);
  var cols;// = p5.floor(p5.width*scl);
  var offset;
  var offset;
  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(200, 200, 200);
    p5.strokeWeight(3);

    rows = p5.floor(p5.height/scl);
    cols = p5.floor(p5.width/scl);
    offset = p5.ceil(scl/2);

    p5.noLoop();
  }

  p5.draw = () => {
    p5.noFill();

    for(let y = 0; y < cols; y++) {
      p5.beginShape();

      for(let x = 0; x < rows; x++) {

        p5.vertex(x*scl + offset, y*scl + offset);
      }
      p5.endShape();
    }
    inc += .01;
  }
}

export default sketch