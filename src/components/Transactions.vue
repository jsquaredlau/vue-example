<template>
  <div class="card transactions-panel">
    <h1>Transactions</h1>
    <span>{{ transactionRange }}</span>
    <TransactionItem v-for="transaction in transactions" :data="transaction" :key="transaction.id"></TransactionItem>
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

  private transactions: Transaction[] = [
    {
      id: 8888,
      status: 0,
      parents: ["mother", "father"]
    },
    {
      id: 8889,
      status: 1,
      parents: ["brother", "sister"]
    },
    {
      id: 8890,
      status: 2,
      parents: ["cousin", "another cousin"]
    },
    {
      id: 8891,
      status: 2,
      parents: ["niece", "nephew"]
    }
  ];
  // Lifecycle Hook
  // Methods
  // Computed
  get transactionRange(): string {
    const from = this.offset * this.limit + 1;
    const to = from + this.limit - 1;
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
</style>