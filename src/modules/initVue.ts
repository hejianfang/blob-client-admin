import Vue from 'vue';
import '../assets/css/base.less';
import elementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUi);
Vue.prototype.$success = (msg: string) => {
  Vue.prototype.$message.success({ message: msg, duration: 1000 });
};
Vue.prototype.$error = (er: any) => {
  let message = '网络错误';
  if (er && er.response && er.response.data) {
    message = er.response.data.message || er.response.data.errMessage;
  } else {
    message = er;
  }
  Vue.prototype.$message.error({ message, duration: 1000 });
};
Vue.config.productionTip = false;

export default Vue;
