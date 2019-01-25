// import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "../../src/app.vue";
import chai from "chai";
import sinonChai from "sinon-chai";
const expect = chai.expect;
chai.use(sinonChai);

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  createSimulation: () => { "foo"; },
};

const store = new Vuex.Store({ actions });

describe("App.vue", () => {
  it("Graph gets created", () => {
    const wrapper = shallowMount(App, { store, localVue });
    // expect(actions.createSimulation).should.have.been.called();
  });
});
