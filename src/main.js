import Vue from 'vue'
import axios from 'axios'
import {
  Alert,
  Layout,
  Button,
  Table,
  Tabs,
  Icon,
  Notification,
  Form,
  Input,
  Checkbox
} from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'
// import Antd from 'ant-design-vue'

import App from './App.vue';
import router from './router/index';

// Vue.component(Layout);
// Vue.component(Table);
// Vue.component(Form);
// Vue.component(Button.name, Button);
Vue.use(Alert);
Vue.use(Layout);
Vue.use(Button);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Notification);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);

// Vue.use(Antd)

Vue.prototype.$notification = Notification; //  在vue 单文件中可以直接 this.$notification去调用
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
