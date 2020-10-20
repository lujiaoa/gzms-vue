import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axios from 'axios'
//导入moment
import moment from 'moment'
//导入qs
import qs from 'qs'
Vue.prototype.qs=qs;
Vue.prototype.moment=moment;
//导入Mint UI
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css';
//注册为Vue的插件
Vue.use(MintUI)

// 导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;

import myFooter from './components/my-footer.vue';
Vue.component('my-footer',myFooter);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
