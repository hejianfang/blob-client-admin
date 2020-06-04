const state = {};
const actions = {
  uploadFiles(_: any, file: any) {
    const formData = new FormData();
    formData.append('file', file);
    return _.dispatch('callInterface', {
      method: 'post',
      url: '/api/uploadfiles',
      data: formData,
    }).then((res: any) => {
      return res.data;
    });
  }
}
export default {
  state,
  actions,
}