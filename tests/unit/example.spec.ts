import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import Transactions from "../../src/components/Transactions.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Transactions.vue", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      totalTransactions: () => 60,
      pageOfTransactions: () => () => { new Array(60) },
    };

    store = new Vuex.Store({
      state: {},
      getters
    });
  });

  it("Pagination shows 'More' button when there are sufficient transactions", () => {
    const wrapper = shallowMount(Transactions, { store, localVue });
    // store.state.alpha.transactionList = new Array(60);
    // expect(store.state.alpha.transactionList.length).equal(60);

  });
});
