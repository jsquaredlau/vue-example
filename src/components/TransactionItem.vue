<template>
  <div class="transaction-item" :class="$mq">
    <div class="transaction-item-id" :class="$mq">{{ start_and_end(random64String()) }}</div>
    <div class="transaction-item-status" :class="[statusClass, $mq]">{{ status }}</div>
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
  private start_and_end(str) {
    if (str.length > 30) {
      return (
        str.substr(0, 10) + "..." + str.substr(str.length - 10, str.length)
      );
    }
    return str;
  }

  private random64String() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }

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
  display: flex;
  border-bottom: 1px solid #d2dae2;
  // padding: 1
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  width: 100%;

  &-id {
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    width: 60%;
    // margin: auto;

    &.mobile {
      font-size: 14px;
      line-height: 30px;
    }

    &.tablet {
      font-size: 16px;
      width: 50%;
    }
  }

  &-status {
    width: 30%;
    // line-height: 70px;
    text-align: center;
    margin: auto;
    color: white;
    font-size: 12px;
    background-color: #ff5e57;
    font-weight: 600;
    border-radius: 20px;

    &.mobile {
      margin: auto;
      width: calc(max-content + 10);
      padding-left: 5px;
      padding-right: 5px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
    }

    &.tablet {
      font-size: 16px;
      width: calc(max-content + 10);
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

