const state = {};
const actions = {
  addArticle(_: any, data: any) {
    return _.dispatch('callInterface', {
      method: 'post',
      url: '/api/addArticle',
      data,
    }).then((res: any) => {
      return res;
    });
  },
  getArticlePages(_: any, params: any) {
    return _.dispatch('callInterface', {
      method: 'get',
      url: '/api/articleListPages',
      params,
    }).then((res: any) => {
      return res;
    });
  },
  getArticleDetailForId(_: any, params: any) {
    return _.dispatch('callInterface', {
      method: 'get',
      url: '/api/getArticleDetail',
      params,
    }).then((res: any) => {
      return res;
    });
  },
};
export default {
  state,
  actions,
};
