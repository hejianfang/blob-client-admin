import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import ajaxData from '@/modules/ajaxData';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    callInterface(_, { url, method, pathVar, data, params, headers }) {
      let it = { url, method };
      if (it) {
        let url: any = pathVar ? it.url.replace('{pathVar}', pathVar) : it.url;
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
  },
});
