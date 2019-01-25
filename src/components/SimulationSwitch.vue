<template>
  <div class="simulation-switch" :class="$mq">
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

<style scoped lang="scss">
@import "../assets/styles.scss";

.simulation-switch {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding: 20px;

  h1 {
    font-size: 30px;

    &.mobile {
      width: 100%;
    }
  }

  button {
    width: 150px;
    height: 50px;
    opacity: 0.3;
    margin: auto 20px auto 20px;
    outline: none;
    text-align: left;
    border: 0px;
    border-bottom: 4px solid #575fcf;
    color: #808e9b;
    font-size: 18px;
    font-weight: 600;
    background-color: white;
    transition: 0.2s ease-out;
    text-transform: capitalize;

    &:hover {
      color: #485460;
      opacity: 1;
      font-size: 24px;
    }

    &.mobile {
      width: max-content;
      margin: auto;
      font-size: 18px;
    }

    &.active {
      color: #485460;
      opacity: 1;
      font-size: 24px;
    }
  }
}
</style>