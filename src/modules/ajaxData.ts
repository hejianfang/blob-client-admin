const generatePostHeaders = (contentType: string) => {
  const headers = { Accept: 'application/json' };
  headers['Content-Type'] = contentType || 'application/json';
  return headers;
};
const generateQueryParams = (params: any) => {
  let r = [];
  if (params) {
    // tslint:disable-next-line: forin
    for (let p in params) {
      let v = params[p];
      if (v || v === false || v === 0 || v === '') {
        if (Array.isArray(v)) {
          r.push(`${p}=${v.join(',')}`);
        } else {
          r.push(p + '=' + encodeURIComponent(v));
        }
      }
    }
    if (r.length > 0) {
      return '?' + r.join('&');
    }
  }
  return '';
};
const generatePostData = (params: any) => {
  let r = [];
  if (params) {
    // tslint:disable-next-line: forin
    for (let p in params) {
      let v = params[p];
      if (v) {
        if (Array.isArray(v)) {
          r.push(p + '=' + v.join(','));
        } else {
          r.push(p + '=' + encodeURIComponent(v));
        }
      }
    }
    if (r.length > 0) {
      return r.join('&');
    }
  }
  return '';
};

export default {
  generatePostHeaders,
  generateQueryParams,
  generatePostData,
};
