<template>
  <div class="card graph-wrapper">
    <div class="graph-panel">
      <div id="cy" class="graph-panel-visual">
        <svg height="100%" width="100%">
          <g></g>
        </svg>
      </div>
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
import dagre from "dagre";
import dagreD3 from "dagre-d3";
import * as d3 from "d3";

@Component
export default class Graph extends Vue {
  // Data
  // Lifecycle Hooks
  private mounted() {
    // Create the input graph
    var g = new dagreD3.graphlib.Graph().setGraph({});

    // Fill node "A" with the color green
    g.setNode("A", { style: "fill: #afa" });

    // Make the label for node "B" bold
    g.setNode("B", { style: "fill: #afa", labelStyle: "font-weight: bold" });

    // Double the size of the font for node "C"
    g.setNode("C", { style: "fill: #afa", labelStyle: "font-size: 2em" });

    g.setNode("D", { style: "fill: #afa" });

    g.setNode("E", { style: "fill: #afa" });

    // Make the edge from "A" to "B" red, thick, and dashed
    g.setEdge("A", "B", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;",
      arrowheadStyle: "fill: #f66"
    });

    // Make the label for the edge from "C" to "B" italic and underlined
    g.setEdge("C", "B", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;",
      label: "A to C",
      labelStyle: "font-style: italic; text-decoration: underline;"
    });

    // Make the edge between A and D smoother.
    // see available options for lineInterpolate here: https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate
    g.setEdge("A", "D", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;",
      label: "line interpolation different",
      curve: d3.curveBasis
    });

    g.setEdge("E", "D", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;"
    });

    // Make the arrowhead blue
    g.setEdge("A", "E", {
      style:
        "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5; fill-opacity: 0;",
      label: "Arrowhead class",
      arrowheadClass: "arrowhead"
    });

    // Create the renderer
    var render = new dagreD3.render();

    // Set up an SVG group so that we can translate the final graph.
    var svg = d3.select("svg"),
      inner = svg.append("g");

    // Run the renderer. This is what draws the final graph.
    render(inner, g);

    // Center the graph
    var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
    inner.attr("transform", "translate(" + xCenterOffset + ", 20)");
    svg.attr("height", g.graph().height + 40);
  }
  // Methods
  // Computed
}
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";
.graph-wrapper {
  grid-column: 1 / 3;
}
rect {
  fill: blue;
}

.node {
  rect {
    stroke: #333;
    fill-opacity: none;
    stroke-width: 2px;
  }
}
.edgePath {
  path {
    .path {
      stroke: #f66;
      stroke-width: 3px;
      stroke-dasharray: 5, 5;
      fill-opacity: 0;
    }
  }
}

.arrowhead {
  stroke: blue;
  fill: blue;
  stroke-width: 2px;
}

.graph-panel {
  height: 500px;
  display: grid;
  grid-template-rows: 5fr 1fr;

  &-visual {
    background-color: #b9cddd00;
  }

  &-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

