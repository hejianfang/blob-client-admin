import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import ajaxData from '@/modules/ajaxData';
import admin from '@/pages/admin/store';
Vue.use(Vuex);
const state: any = {};
const actions = {
  callInterface(_: any, { url, method, pathVar, data, params, headers }: any) {
    let it = { url, method };
    if (it) {
      let url: string = pathVar ? it.url.replace('{pathVar}', pathVar) : it.url;
      url += ajaxData.generateQueryParams(params);
      if (it.method === 'get') {
        return new Promise((reslove, reject) => {
          axios({
            method: it.method,
            url,
          }).then((res: any) => {
            if (res.data.code === 200) {
              reslove(res.data);
            } else {
              reject(res.data.msg);
            }
          });
        });
      } else {
        let postData = data;
        return new Promise((reslove, reject) => {
          axios({
            method: it.method,
            url,
            data: postData,
            headers: headers || ajaxData.generatePostHeaders(params),
          }).then((res: any) => {
            if (res.data.code === 200) {
              reslove(res.data);
            } else {
              reject(res.data.msg);
            }
          });
        });
      }
    }
  },
};
const modules = {
  ...admin,
};
export default new Vuex.Store({
  modules,
  state,
  actions,
});
