import Vue from "vue";
import Vuex from "vuex";
import commentform from "@/store/modules/commentform.js";
import container from "@/store/modules/container.js";
// import firebase from "firebase/app";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    commentform,
    container,
  },
});
