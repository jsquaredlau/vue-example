<template>
  <div class="transaction-item">
    <div class="transaction-item-id">{{ id }}</div>
    <div class="transaction-item-parents">{{ parents }}</div>
    <div class="transaction-item-status" :class="[statusClass]">{{ status }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface Transaction {
  id: number;
  status: number;
  parents: Array<string>;
}

@Component
export default class TransactionItem extends Vue {
  @Prop({ required: true }) data!: Transaction;
  //Data
  statusClass: string = "";
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
    if (this.data.status == 0) {
      this.statusClass = "new";
      return "New";
    } else if (this.data.status == 1) {
      this.statusClass = "in-progress";
      return "In Progress";
    } else if (this.data.status == 2) {
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
  grid-template-columns: 4fr 1 fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 10px;
  border-bottom: 1px solid #d2dae2;
  height: 70px;
  padding-top: 20px;
  padding-bottom: 20px;

  &-id {
    grid-column: 1 / 5;
    // border: 3px solid red;
    font-size: 24px;
    font-weight: bold;
  }
  &-parents {
    grid-column: 1 / 5;
    // border: 3px solid red;
  }

  &-status {
    grid-column: 5 / 6;
    grid-row: 1 / 3;
    text-align: center;
    margin: auto;
    width: 120px;
    line-height: 28px;
    color: white;
    background-color: #ff5e57;
    font-weight: 600;
    // border: 3px solid red;
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

