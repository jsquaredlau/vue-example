<template>
  <div class="simulation-switch-wrapper">
    <div class="card simulation-switch-panel">
      <h1>Simulations</h1>
      <button>Alpha</button>
      <button>Beta</button>
      <button>Gamma</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SimulationSwitch extends Vue {
  // Data
  // Lifecycle Hook
  // Methods
  // Computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles.scss";

.simulation-switch-panel {
  grid-column: 2 / 3;
  text-align: left;
  padding: 20px;

  button {
    text-align: left;
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    font-size: 24px;
    background-color: white;
    box-shadow: 5px 5px #d2dae2;
    border-radius: 10px;
    border: 0px solid;
    padding-left: 20px;
  }
}
</style>