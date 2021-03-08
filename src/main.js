import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueHighlightJS from 'vue-highlightjs'

import VueClipboard from 'vue-clipboard2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCopy, faFilePdf, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/styles/index.css';
import 'highlight.js/styles/googlecode.css';

library.add(faStar, faGithub, faFilePdf, faEnvelope, faCopy, faBookOpen);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueClipboard);
Vue.use(VueHighlightJS)

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
