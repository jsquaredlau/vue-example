<template>
  <div class="simulation-switch-panel">
    <h1>Simulations</h1>
    <button
      v-for="api in apis"
      :key="api"
      class="api"
      :class="{selected: currentApi == api}"
      @click="changeApi(api)"
    >{{ api }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SimulationSwitch extends Vue {
  // Data
  private apis = ["Alpha", "Beta", "Gamma"];
  private currentApi: string = "Alpha";
  // Lifecycle Hook
  // Methods
  private changeApi(api: string) {
    this.$store.commit("newTransaction");
    this.currentApi = api;
  }
  // Computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles.scss";

.simulation-switch-panel {
  text-align: left;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  h1 {
    grid-column: 1 / 5;
  }

  button {
    text-align: left;
    height: 50px;
    width: 150px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
    color: #808e9b;
    background-color: white;
    border: 0px;
    border-bottom: 4px solid #575fcf;
    opacity: 0.3;
    transition: 0.2s ease-out;
    outline: none;

    &.selected {
      color: #485460;
      opacity: 1;
    }
  }
}
</style>