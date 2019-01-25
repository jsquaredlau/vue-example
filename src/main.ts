import Vue from "vue";
import VueMq from "vue-mq";
import App from "./App.vue";
import store from "./store";
import VueWorker from "vue-worker";

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 1250,
    laptop: 1440,
    desktop: Infinity
  }
});

Vue.use(VueWorker);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
