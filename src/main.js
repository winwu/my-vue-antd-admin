import Vue from 'vue';
import axios from 'axios';
import {
  Alert,
  Layout,
  Button,
  Breadcrumb,
  Table,
  Tabs,
  Icon,
  Notification,
  Form,
  Input,
  Checkbox,
  Menu,
  Row,
  Col,
  Divider
} from 'ant-design-vue';
import App from './App.vue';
import router from './router/index';

import './styles/main.scss';

Vue.use(Alert);
Vue.use(Layout);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Notification);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Menu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Divider);

// Vue.prototype.$notification = Notification;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
