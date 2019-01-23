<template>
  <div id="app" :class="$mq">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <mq-layout mq="mobile">
      <FooterMenu></FooterMenu>
    </mq-layout>
    <mq-layout mq="tablet+">
      <SimulationSwitch></SimulationSwitch>
    </mq-layout>
    <Graph></Graph>
    <Transactions></Transactions>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "./components/HelloWorld.vue";
import Graph from "./components/Graph.vue";
import Transactions from "./components/Transactions.vue";
import SimulationSwitch from "./components/SimulationSwitch.vue";
import FooterMenu from "./components/FooterMenu.vue";

@Component({
  components: {
    // HelloWorld,
    Graph,
    Transactions,
    SimulationSwitch,
    FooterMenu
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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, minmax(100px, max-content));
  // grid-column: 1 / 3;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  &.mobile {
    grid-template-columns: 2fr;
    grid-column-gap: 0px;
    padding: 10px;
  }
}
</style>
