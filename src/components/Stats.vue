<template>
  <div class="stats-area">
    <h3 class="stats-area-label">Key Stats</h3>
    <StatItem v-for="item in keyStats" :stat="item" :key="item"></StatItem>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StatItem from "./StatItem.vue";

@Component({
  components: {
    StatItem
  }
})
export default class Stats extends Vue {
  // Data
  private keyStats = [
    "Status",
    "Velocity",
    "Average Number of Users",
    "Average Number of transactions",
    "Average transaction time",
    "Value per block"
  ];
  // Life Cycle Hooks
  // Methods
  // Computed
}
</script>

<style lang="scss" scoped>
.stats-area {
  height: 500px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;

  &.mobile {
    margin-bottom: 40px;
  }

  &-label {
    display: block;
    padding-left: 20px;
    width: calc(100% - 40px);
    text-align: left;
  }
}
</style>

