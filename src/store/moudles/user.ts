const state = {
  myInfo: {},
};
const actions = {
  getInfo(_: any) {
    return _.dispatch('callInterface', {
      method: 'get',
      url: '/api/getMyInfo',
    }).then((res: any) => {
      state.myInfo = res.data;
      return res.data;
    });
  },
};
export default {
  state,
  actions,
};
