import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueClipboard from 'vue-clipboard2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/styles/index.css';

library.add(faStar, faGithub, faFilePdf);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueClipboard);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
