<template>
  <div class="simulation-switch-panel" :class="$mq">
    <h1>Simulations</h1>
    <button
      :class="[{active: currentApi === api}, $mq]"
      v-for="api in apis"
      :key="api"
      @click="changeApi(api)"
    >{{ api }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SimulationSwitch extends Vue {
  // Data
  private apis = ["alpha", "beta", "gamma"];
  // Lifecycle Hook
  // Methods
  private changeApi(api: string) {
    this.$store.commit("swapApi", api);
  }
  // Computed
  get currentApi() {
    return this.$store.state.currentApi;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles.scss";

.simulation-switch-panel {
  text-align: left;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;

  &.mobile {
    grid-column-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  h1 {
    grid-column: 1 / 6;
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
    text-transform: capitalize;

    &.mobile {
      font-size: 18px;
      width: max-content;
    }

    &.active {
      color: #485460;
      opacity: 1;
    }
  }
}
</style>