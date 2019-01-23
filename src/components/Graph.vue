<template>
  <div class="card graph-wrapper">
    <div class="graph-panel">
      <div class="graph-panel-visual"></div>
      <div class="graph-panel-summary">
        <div style="background-color: #05c46b;"></div>
        <div style="background-color: #575fcf;"></div>
        <div style="background-color: #ff5e57;"></div>
        <div style="background-color: #f53b57;"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Graph extends Vue {
  // Data
  // Lifecycle Hooks
  // Methods
  // Computed
}
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";
.graph-wrapper {
  grid-column: 1 / 3;
}

.graph-panel {
  height: 500px;
  display: grid;
  grid-template-rows: 5fr 1fr;

  &-visual {
    background-color: #1e272e;
  }

  &-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

