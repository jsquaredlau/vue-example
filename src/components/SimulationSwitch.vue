<template>
  <div class="simulation-switch-panel" :class="$mq">
    <h1 :class="$mq">Dashboard</h1>
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
  display: flex;
  padding: 20px;
  flex-wrap: wrap;

  h1 {
    font-size: 30px;
    // width: 100%;

    &.mobile {
      // padding-left: 20px;
      width: 100%;
    }
  }

  button {
    text-align: left;
    height: 50px;
    width: 150px;
    margin: auto 20px auto 20px;
    font-size: 18px;
    font-weight: 600;
    color: #808e9b;
    background-color: white;
    border: 0px;
    border-bottom: 4px solid #575fcf;
    opacity: 0.3;
    transition: 0.2s ease-out;
    outline: none;
    text-transform: capitalize;

    &:hover {
      color: #485460;
      opacity: 1;
      font-size: 24px;
    }

    &.mobile {
      margin: auto;
      font-size: 18px;
      width: max-content;
    }

    &.active {
      color: #485460;
      opacity: 1;
      font-size: 24px;
    }
  }
}
</style>