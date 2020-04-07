import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUw7mo4S2XsWDE-he8Q1gHrtnMt1fjM84",
  authDomain: "helloworld-23f52.firebaseapp.com",
  databaseURL: "https://helloworld-23f52.firebaseio.com",
  projectId: "helloworld-23f52",
  storageBucket: "helloworld-23f52.appspot.com",
  messagingSenderId: "263134571452",
  appId: "1:263134571452:web:f7e7f5348452956b21d9b9",
  measurementId: "G-5P7SBBTR5S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
