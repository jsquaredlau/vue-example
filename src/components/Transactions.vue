<template>
  <div class="card transactions-panel">
    <h1>Transactions</h1>
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
    return this.$store.getters.mostRecentTransactions(this.limit, this.offset);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles.scss";

.transactions-panel {
  grid-column: 1 / 3;
  text-align: left;
  padding: 20px;
}

.pagination {
  height: 100px;
  text-align: center;
  margin-top: 20px;

  button {
    height: 50px;
    width: 100px;
    color: #3c40c6;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #3c40c6;
    transition: 0.2s;
    outline: none;
    background-color: white;

    &:hover {
      color: white;
      background-color: #3c40c6;
    }

    &.mobile {
      width: 50px;
      font-size: 14px;
    }
  }

  span {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 24px;

    &.mobile {
      width: 50px;
      font-size: 16px;
    }
  }
}

.list {
  margin-bottom: 75px;
}
</style>