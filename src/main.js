import Vue from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';
import firebase from './plugins/firebase';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app');
