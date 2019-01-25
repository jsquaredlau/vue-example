import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentApi: "alpha",
    alpha: {
      edges: new Map(), // confirmed edges
      graph: new Array(),
      transactionList: new Array(), // Array of transactions and their parents
      sortedTransactions: new Array(), // Numerical order == topological order???
      latestTransaction: { id: -1, status: 2, parents: new Array() }
    },
    beta: {
      edges: new Map(), // confirmed edges
      graph: new Array(),
      transactionList: new Array(), // Array of transactions and their parents
      sortedTransactions: new Array(), // Numerical order == topological order???
      latestTransaction: { id: -1, status: 2, parents: new Array() }
    },
    gamma: {
      edges: new Map(), // confirmed edges
      graph: new Array(),
      transactionList: new Array(), // Array of transactions and their parents
      sortedTransactions: new Array(), // Numerical order == topological order???
      latestTransaction: { id: -1, status: 2, parents: new Array() }
    }
  },
  getters: {
    mostRecentTransactions: (state) => (limit = 50, offset = 0) => {
      if (offset + limit > state[state.currentApi].transactionList.length) {
        return state[state.currentApi].transactionList
          .slice(offset, state[state.currentApi].transactionList.length);
      }
      return state[state.currentApi].transactionList.slice(offset, offset + limit);
    },

    totalTransactions: (state) => {
      return state[state.currentApi].transactionList.length;
    }

  },
  mutations: {
    swapApi(state, api: string) {
      state.currentApi = api;
    },

    newTransaction(state, api: string) {
      const updateStatus = (transaction, status: number) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            transaction.status = status;
            resolve();
          }, 2345);
        });
      };

      // Create a new transaction
      const newTransaction = {
        id: state[api].latestTransaction.id + 1,
        status: 0,
        parents: new Array()
      };

      // Add to our list of transactions
      state[api].transactionList.unshift(newTransaction);
      state[api].latestTransaction = newTransaction;

      // Update the edges and graph
      let transactionParents = new Array();
      if (newTransaction.id !== 0) {
        // create random int smaller than newest ID
        const parentId = Math.floor(Math.random() * Math.floor(newTransaction.id));
        newTransaction.parents.push(parentId);
        transactionParents = [parentId];
        state[api].edges.set([parentId, newTransaction.id], {});
      }
      state[api].graph.push(transactionParents);

      // Topologically place the transaction
      state[api].sortedTransactions.push(newTransaction);

      updateStatus(newTransaction, 1)
        .then(() => updateStatus(newTransaction, 2));
    }
  },
  actions: {
    async createSimulation(context, api: string) {
      function sleep(time: number) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
      while (true) {
        await sleep(1000).then(() => {
          context.commit("newTransaction", api);
        });
      }
    }
  },
});
