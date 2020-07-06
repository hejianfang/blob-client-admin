const getToken = () => {
  const token = localStorage.getItem('my_token');
  if (token) {
    return 'Bearer ' + token;
  }
};
const generatePostHeaders = (contentType?: string) => {
  let headers = { Accept: 'application/json' };
  headers['Content-Type'] = contentType || 'application/json';
  // tslint:disable-next-line: no-string-literal
  headers['Authorization'] = getToken();
  return headers;
};
const generateGetHeaders = () => {
  let headers: any = {};
  // tslint:disable-next-line: no-string-literal
  headers['Authorization'] = getToken();
  return headers;
};
const generateQueryParams = (params: any) => {
  let r: string[] = [];
  if (params) {
    for (let p of Object.keys(params)) {
      let v = params[p];
      if (v || v === false || v === 0) {
        if (Array.isArray(v)) {
          r.push(`${p}=${v.join(',')}`);
        } else {
          r.push(`${p}=${encodeURIComponent(v)}`);
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
  let r: string[] = [];
  if (params) {
    for (let p of Object.keys(params)) {
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
  generateGetHeaders,
};
