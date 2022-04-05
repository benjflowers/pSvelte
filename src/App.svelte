<script>
  import P5Canvas from "./components/P5Canvas.svelte";
  import dots from "./sketchbook/dots";
  import lines from "./sketchbook/lines";
</script>

<style>
  main {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  }
</style>

<main>
  <div class="sketch" id="dot">
    <P5Canvas id="dot" sketch={dots} />
  </div>
  <div class="sketch" id="lines">
    <P5Canvas id="lines" sketch={lines} />
  </div>
</main>
