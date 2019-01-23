<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Graph></Graph>
    <Transactions></Transactions>
    <SimulationSwitch></SimulationSwitch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "./components/HelloWorld.vue";
import Graph from "./components/Graph.vue";
import Transactions from "./components/Transactions.vue";
import SimulationSwitch from "./components/SimulationSwitch.vue";

@Component({
  components: {
    // HelloWorld,
    Graph,
    Transactions,
    SimulationSwitch
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, minmax(100px, max-content));
  grid-column: 1 / 3;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>
