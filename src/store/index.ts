import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import ajaxData from '@/modules/ajaxData';
import admin from '@/pages/admin/store';
Vue.use(Vuex);
const state = {
  a: 1,
};
const actions = {
  callInterface(_: any, { url, method, pathVar, data, params, headers }: any) {
    console.log('url', url);
    let it = { url, method };
    if (it) {
      let url: string = pathVar ? it.url.replace('{pathVar}', pathVar) : it.url;
      url += ajaxData.generateQueryParams(params);
      if (it.method === 'get') {
        return axios({
          method: it.method,
          url,
        });
      } else {
        let postData = data;
        return axios({
          method: it.method,
          url,
          data: postData,
          headers: headers || ajaxData.generatePostHeaders(params),
        });
      }
    }
  },
};
const modules = {
  admin,
};
export default new Vuex.Store({
  modules,
  state,
  actions,
});
