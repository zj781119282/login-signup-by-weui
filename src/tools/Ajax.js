/**
 * Created by ZJ on 2018/3/10.
 */

/**
 * 判断字符串是否为JSON格式
 * @param str {string}
 * @returns {boolean}
 */
function isJSON(str) {
  if (typeof str == 'string') {
    try {
      JSON.parse(str);
      return true;
    } catch(e) {
      return false;
    }
  }
  return false;
}

/**
 * 封装ajax请求
 * @param obj {object}
 * @returns {Promise}
 */
function $ajax(obj) {
  if (!obj.url || !obj.method) {
    throw new Error('params are not completed!!');
  }
  if (obj.method) {
    obj.method = obj.method.toLowerCase();
  }
  if (obj.method === 'post' && (!obj.data || typeof obj.data !== 'object')) {
    throw new Error('post request needs a data, and it must be an object!!');
  }
  if (obj.method === 'get' && (obj.params || typeof obj.params === 'object')) {
    let string = '';
    Object.keys(obj.params).forEach((item, index) => {
      string += `${item}=${obj.params[item]}&`;
    });
    obj.url = `${obj.url}${obj.url.includes('?') ? '&' : '?'}${string.substring(0, string.length - 1)}`;
  }

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    if (obj.method === 'post') {
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    if (obj.headers) {
      Object.keys(obj.headers).forEach((item, index) => {
        xhr.setRequestHeader(item, obj.headers[item]);
      });
    }
    if (obj.withCredentials) {
      xhr.withCredentials = obj.withCredentials;
    }

    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          isJSON(this.responseText) ? resolve(JSON.stringify(this.responseText), this) : resolve(this.responseText, this);
        } else {
          const resJson = { code: this.status, response: this.response };
          reject(resJson, this);
        }
      }
    };

    obj.method.toLowerCase() === 'post' ? xhr.send(JSON.stringify(obj.data)) : xhr.send();
  });
}

export default $ajax
