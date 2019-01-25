<template>
  <div class="transaction-item" :class="$mq">
    <div class="transaction-item-id" :class="$mq">{{ truncate(random64String()) }}</div>
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
  private truncate(str) {
    if (str.length > 30) {
      return str.substr(0, 7) + "..." + str.substr(str.length - 7, str.length);
    }
    return str;
  }

  private random64String() {
    return Math.random()
      .toString(16)
      .substring(2, 15)
      .repeat(3);
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
  width: 100%;
  display: flex;
  text-align: center;
  border-bottom: 1px solid #d2dae2;
  padding-top: 15px;
  padding-bottom: 15px;

  &-id {
    width: 60%;
    line-height: 28px;
    font-size: 14px;
    font-weight: 500;

    &.tablet {
      width: 50%;
      line-height: 32px;
      font-size: 16px;
    }

    &.mobile {
      font-size: 14px;
    }
  }

  &-status {
    width: 30%;
    margin: auto;
    text-align: center;
    color: white;
    background-color: #ff5e57;
    font-size: 12px;
    font-weight: 600;
    border-radius: 20px;

    &.tablet {
      width: calc(max-content + 10);
      font-size: 16px;
    }

    &.mobile {
      width: calc(max-content + 10);
      height: 20px;
      margin: auto;
      padding-left: 5px;
      padding-right: 5px;
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

