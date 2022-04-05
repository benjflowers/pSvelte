<script>
  export let sketch;
  export let id;

  import { onMount } from "svelte";
  import p5 from "../p5.js";

  onMount(function() {
    new p5(sketch, id);
  });
</script>