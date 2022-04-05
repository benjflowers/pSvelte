<script>
  import { Router, Route, Link } from "svelte-navigator";
  import P5Canvas from "./components/P5Canvas.svelte";
  import Home from "./components/Home.svelte"
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

<Router>
  <header>
    <h1>Sketches</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="dot">Dots</Link>
      <Link to="lines">Lines</Link>
    </nav>
  </header>

  <main>
    <Route path="/">
      <Home/>
    </Route>

    <Route path="dot">
      <div class="sketch" id="dot">
        <P5Canvas id="dot" sketch={dots} />
      </div>
    </Route>

    <Route path="lines">
      <div class="sketch" id="lines">
        <P5Canvas id="lines" sketch={lines} />
      </div>
    </Route>
  </main>
</Router>
