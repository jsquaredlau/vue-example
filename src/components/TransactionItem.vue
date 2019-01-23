<template>
  <div class="transaction-item" :class="$mq">
    <div class="transaction-item-id" :class="$mq">{{ id }}</div>
    <div class="transaction-item-status" :class="[statusClass, $mq]">{{ status }}</div>
    <!-- <div class="expand"></div> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface Transaction {
  id: number;
  status: number;
  parents: string[];
}

@Component
export default class TransactionItem extends Vue {
  @Prop({ required: true }) private data!: Transaction;
  // Data
  private statusClass: string = "";
  // Lifecycle Hooks

  // Methods

  // Computed
  get id() {
    return this.data.id;
  }

  get parents() {
    return this.data.parents[0];
  }

  get status() {
    if (this.data.status === 0) {
      this.statusClass = "new";
      return "New";
    } else if (this.data.status === 1) {
      this.statusClass = "in-progress";
      return "In Progress";
    } else if (this.data.status === 2) {
      this.statusClass = "completed";
      return "Completed";
    } else {
      this.statusClass = "unknown";
      return "Unknown";
    }
  }
}
</script>

<style lang="scss" scoped>
.transaction-item {
  display: grid;
  grid-template-columns: 80% 20%;
  border-bottom: 1px solid #d2dae2;
  height: 70px;
  padding-top: 20px;
  padding-bottom: 20px;

  &.mobile {
    height: 50px;
    grid-template-columns: 100%;
  }

  &-id {
    font-size: 24px;
    font-weight: bold;
    line-height: 70px;

    &.mobile {
      font-size: 18px;
      line-height: 30px;
    }
  }

  &-status {
    width: 120px;
    // line-height: 70px;
    text-align: center;
    margin: auto;
    padding: auto;
    color: white;
    font-size: 18px;
    background-color: #ff5e57;
    font-weight: 600;

    &.mobile {
      margin: 0;
      width: max-content;
      padding-left: 5px;
      padding-right: 5px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
    }
  }

  .new {
    background-color: #0fbcf9;
  }

  .completed {
    background-color: #0be881;
  }

  .in-progress {
    background-color: #ffd32a;
  }
}
</style>

