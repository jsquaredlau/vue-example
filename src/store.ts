import Vue from "vue";
import Vuex from "vuex";
import Transaction from "./components/TransactionItem.vue";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    dag: {
      edges: new Map(), // confirmed edges
      graph: new Array(),
      transactions: new Array(), // Array of transactions and their parents
      sortedTransactions: new Array(), // Array of topologically sorted transactions
      mostRecentTransaction: { id: 0, status: 2, parents: [] }
    },
    random: {
      money: 0,
      energy: 100
    }
  },
  mutations: {
    moreMoney(state) {
      state.random.money++;
    },
    newTransaction(state) {
      // Create a new transaction
      const newTransaction = {
        id: state.dag.mostRecentTransaction.id + 1,
        status: 0,
        parents: []
      };

      // Add to our list of transactions
      state.dag.transactions.push(newTransaction);
      state.dag.mostRecentTransaction = newTransaction;

      // Update the edges and graph
      let transactionParents = new Array();
      if (newTransaction.id !== 0) {
        // create random int smaller than newest ID
        const parentId = Math.floor(Math.random() * Math.floor(newTransaction.id));
        transactionParents = [parentId];
        state.dag.edges.set([parentId, newTransaction.id], {});
      }
      state.dag.graph.push(transactionParents);

      // Topologically place the transaction
      state.dag.sortedTransactions.push(newTransaction);
    }
  },
  actions: {

  },
});
