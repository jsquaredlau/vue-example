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
      edges: new Map(),
      graph: new Array(),
      transactionList: new Array(),
      sortedTransactions: new Array(),
      latestTransaction: { id: -1, status: 2, parents: new Array() }
    },
    gamma: {
      edges: new Map(),
      graph: new Array(),
      transactionList: new Array(),
      sortedTransactions: new Array(),
      latestTransaction: { id: -1, status: 2, parents: new Array() }
    }
  },
  getters: {
    pageOfTransactions: (state) => (limit = 50, offset = 0) => {
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
      // Callback for pseudo updating transaction status
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

      // Add it to our list of transactions
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
      /* If i'm not wrong because we add nodes consecutivvely it's
         already topologically sorted? */
      state[api].sortedTransactions.push(newTransaction);

      // Activate the status updater
      updateStatus(newTransaction, 1)
        .then(() => updateStatus(newTransaction, 2));
    }
  },
  actions: {
    async createSimulation(context, api: string) {
      const sleep = (time: number) => {
        return new Promise((resolve) => setTimeout(resolve, time));
      };

      while (true) {
        await sleep(1000).then(() => {
          context.commit("newTransaction", api);
        });
      }
    }
  },
});
