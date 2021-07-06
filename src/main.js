import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA7vBny59p0buswGi3MnXDvUUro3oyrcZI",
  authDomain: "user-authentication-7e5d2.firebaseapp.com",
  projectId: "user-authentication-7e5d2",
  storageBucket: "user-authentication-7e5d2.appspot.com",
  messagingSenderId: "712290671362",
  appId: "1:712290671362:web:59d47bbe271cd55df3801b",
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
