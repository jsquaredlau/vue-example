<template>
  <div class="mobile-menu" :class="menuState">
    <div class="api current" @click="activateMenu">{{ currentApi }}</div>
    <div
      v-for="api in apis"
      :key="api"
      class="api"
      :class="{selected: currentApi == api}"
      @click="changeApi(api)"
    >{{ api }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FooterMenu extends Vue {
  // Data
  private apis = ["Alpha", "Beta", "Gamma"];
  private currentApi = "Alpha";
  private menuState = "collapsed";
  // Lifecycle Hooks
  // Methods
  private activateMenu() {
    if (this.menuState === "collapsed") {
      this.menuState = "expanded";
    } else {
      this.menuState = "collapsed";
    }
  }

  private changeApi(api: string) {
    this.currentApi = api;
    this.activateMenu();
  }
  // Computed
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 0 1px #d2dae2;
  text-align: center;
  -webkit-transition: height 0.5s;
  -moz-transition: height 0.5s;
  -o-transition: height 0.5s;
  transition: height 0.5s;

  &.collapsed {
    height: 50px;
  }
  &.expanded {
    height: 200px;
  }
}

.api {
  font-size: 18px;
  line-height: 50px;

  &.current {
    font-weight: bold;
  }

  &.selected {
    background-color: #575fcf;
    color: white;
  }
}
</style>

