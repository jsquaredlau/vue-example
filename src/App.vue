<template>
  <div id="app">
    <SimulationSwitch></SimulationSwitch>
    <div class="dashboard">
      <div class="graph-info" :class="$mq">
        <Graph></Graph>
        <Stats></Stats>
      </div>
      <div class="transaction-info" :class="$mq">
        <Transactions></Transactions>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Graph from "./components/Graph.vue";
import Transactions from "./components/Transactions.vue";
import SimulationSwitch from "./components/SimulationSwitch.vue";
import Stats from "./components/Stats.vue";
import StatItem from "./components/StatItem.vue";

@Component({
  components: {
    Graph,
    Transactions,
    SimulationSwitch,
    Stats,
    StatItem
  }
})
export default class App extends Vue {
  // Data

  // Lifecycle Hooks
  private mounted() {
    this.$store.dispatch("createSimulation", "alpha");
    setTimeout(() => {
      this.$store.dispatch("createSimulation", "beta");
    }, 5000);
    setTimeout(() => {
      this.$store.dispatch("createSimulation", "gamma");
    }, 10000);
  }
  // Methods

  // Computed
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.dashboard {
  display: flex;
  flex-wrap: wrap;
}

.graph-info {
  width: 70%;

  &.mobile {
    width: 100%;
  }

  &.tablet {
    width: 100%;
  }
}

.transaction-info {
  width: 30%;

  &.mobile {
    width: 100%;
  }

  &.tablet {
    width: 100%;
  }
}
</style>
