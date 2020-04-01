let sketch = p5 => {

  var scl = 10;
  var rows;
  var cols;
  var offset;
  var offset;
  p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.background(200, 200, 200);
    p5.strokeWeight(3);

    rows = p5.floor(p5.height/scl);
    cols = p5.floor(p5.width/scl);
    offset = p5.ceil(scl/2);
  }

  p5.draw = () => {
    p5.background(200, 200, 200);
    p5.noFill();

    for(let y = 0; y < rows; y++) {
      p5.beginShape();

      for(let x = 0; x < cols; x++) {
        let add = 0;
        if(x == 0 || x == rows - 1) {
          add = 0;
        } else {
          add = p5.random(10);
        }

        p5.vertex(x*scl + offset, y*scl + offset + add);
      }
      p5.endShape();
    }
  }
}

export default sketch