<template>
  <div class="graph-panel" :class="$mq">
    <h3 class="graph-panel-label">DAG Chart</h3>
    <div id="cy" class="card graph-panel-visual">
      <svg width="90%">
        <g></g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import dagre from "dagre";
import dagreD3 from "dagre-d3";
import * as d3 from "d3";

@Component
export default class Graph extends Vue {
  // Data

  // Lifecycle Hooks
  private mounted() {
    // Create the input graph
    const g = new dagreD3.graphlib.Graph().setGraph({});

    g.setNode("A", { style: "fill: #afa" });
    g.setNode("B", { style: "fill: #afa", labelStyle: "font-weight: bold" });
    g.setNode("C", { style: "fill: #afa", labelStyle: "font-size: 2em" });
    g.setNode("D", { style: "fill: #afa" });
    g.setNode("E", { style: "fill: #afa" });

    g.setEdge("A", "B", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;",
      arrowheadStyle: "fill: #f66"
    });
    g.setEdge("C", "B", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;"
    });
    g.setEdge("A", "D", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;",
      curve: d3.curveBasis
    });
    g.setEdge("E", "D", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;"
    });
    g.setEdge("A", "E", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;",
      arrowheadClass: "arrowhead"
    });

    // Create the renderer
    const render = new dagreD3.render();

    // Set up an SVG group so that we can translate the final graph.
    const svg = d3.select("svg");
    const inner = svg.append("g");
    render(inner, g);

    // Center the graph
    svg.attr("height", g.graph().height + 40);
  }
  // Methods

  // Computed
}
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.graph-panel {
  width: calc(100% - 40px);
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 60px;

  &.tablet {
    width: calc(100% - 40px);
    height: auto;
  }

  &.mobile {
    width: calc(100% - 40px);
    height: auto;
    margin-bottom: 40px;
  }

  &-visual {
    background-color: #b9cddd00;
  }

  &-label {
    text-align: left;
  }
}
</style>

