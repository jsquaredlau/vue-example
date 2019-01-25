<template>
  <div class="wrapper">
    <div class="card stat-item">
      <h3>{{ stat }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StatItem extends Vue {
  @Prop() private stat!: string;

  // Data
  // Life Cycle Hooks
  // Methods
  // Computed
}
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";
.wrapper {
  width: calc(50% - 40px);
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 30px;
}

.stat-item {
  width: 100%;
  height: 125px;
}
</style>

