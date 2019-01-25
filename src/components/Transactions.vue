<template>
  <div class="transactions-panel" :class="$mq">
    <h3 class="transactions-panel-label">Transactions</h3>
    <div class="card transactions-panel-list">
      <div class="pagination" :class="$mq">
        <button
          :class="$mq"
          :style="{visibility: offset > 0 ? 'visible' : 'hidden'}"
          @click="prevPage"
        >Prev</button>
        <span :class="$mq">{{ transactionRange }}</span>
        <button
          :class="$mq"
          :style="{visibility: transactionCount >= offset + limit ? 'visible' : 'hidden'}"
          @click="nextPage"
        >More</button>
      </div>

      <div class="list">
        <TransactionItem
          v-for="transaction in transactionList"
          :data="transaction"
          :key="transaction.id"
        ></TransactionItem>
      </div>

      <div class="pagination" :class="$mq">
        <button
          :class="$mq"
          :style="{visibility: offset > 0 ? 'visible' : 'hidden'}"
          @click="prevPage"
        >Previous</button>
        <span :class="$mq">{{ transactionRange }}</span>
        <button
          :class="$mq"
          :style="{visibility: transactionCount >= offset + limit ? 'visible' : 'hidden'}"
          @click="nextPage"
        >More</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TransactionItem from "./TransactionItem.vue";
import { Transaction } from "./TransactionItem.vue";

@Component({
  components: {
    TransactionItem
  }
})
export default class Transactions extends Vue {
  // Data
  private limit: number = 50;
  private offset: number = 0;

  // Lifecycle Hook

  // Methods
  private nextPage() {
    this.offset += this.limit;
  }

  private prevPage() {
    this.offset = Math.max(0, this.offset - this.limit);
  }

  // Computed
  get transactionList(): any[] {
    return this.$store.getters.pageOfTransactions(this.limit, this.offset);
  }

  get transactionCount(): number {
    return this.$store.getters.totalTransactions;
  }

  get transactionRange(): string {
    const from = this.offset;
    const to = this.offset + this.limit;
    return from + " to " + to;
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";

.transactions-panel {
  width: calc(100% - 40px);
  flex-grow: 1;
  text-align: left;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 20px;

  &.mobile {
    width: calc(100% - 40px);
  }

  &-label {
    text-align: left;
  }

  &-list {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

.pagination {
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;

  button {
    width: 70px;
    background-color: white;
    border: 1px solid #3c40c6;
    border-radius: 10px;
    color: #3c40c6;
    font-size: 14px;
    transition: 0.2s;
    outline: none;

    &:hover {
      background-color: #3c40c6;
      color: white;
    }

    &.mobile {
      width: 50px;
      font-size: 14px;
    }
  }

  span {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 14px;

    &.mobile {
      width: 50px;
      font-size: 16px;
    }
  }
}
</style>