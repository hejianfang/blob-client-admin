// import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';

// @Module
// export default class Admin extends VuexModule {
//   public dispatch: any;
//   public dir: string[] = [];
//   @MutationAction
//   public async tologin(data: any) {
//     return await this.dispatch('callInterface', {
//       method: 'post',
//       url: '/api/login',
//       data,
//     });
//   }
// }
const state = {};
const actions = {
  tologin(_: any, data: any) {
    return _.dispatch('callInterface', {
      method: 'post',
      url: '/api/login',
      data,
    }).then((res: any) => {
      return res.data;
    });
  },
};
export default {
  state,
  actions,
};
