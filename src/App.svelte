<script>
	import P5Canvas from "./components/P5Canvas.svelte"
	import dots from "./sketchbook/dots"
	import lines from "./sketchbook/lines"

	let sketch1 = function(p5) {
		let x = 100;
		let y = 100;

		p5.setup = function() {
			var canvas = p5.createCanvas(300, 300);
			canvas.parent('canvas1');
		};

		p5.draw = function() {
			p5.background(255, 255, 100);
			p5.fill(200);
			p5.rect(x,y,50,50)
		}
	}

	let sketch2 = function(p5) {
		p5.setup = () => {
			var canvas = p5.createCanvas(300, 300);
			canvas.parent('canvas2');
		};

		p5.draw = () => {
			p5.background(100, 180, 90);
			p5.ellipse(p5.width/2, p5.height/2, 20);
		}
	}
</script>

<style>
	main {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
	}
</style>

<main>
	<div class="sketch" id="canvas1">
		<P5Canvas id="p5canvas1" sketch = {sketch1}/>
	</div>
	<div class="sketch" id="canvas2">
		<P5Canvas id="p5canvas2" sketch = {sketch2}/>
	</div>
	<div class="sketch" id="dot">
		<P5Canvas id="dot" sketch = {dots}/>
	</div>
	<div class="sketch" id="lines">
		<P5Canvas id="lines" sketch = {lines}/>
	</div>
</main>
