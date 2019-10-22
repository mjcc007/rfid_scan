import axios from 'axios';

// 发起请求
export function fetchEndpoint(reqUrl, type = 'POST', data = {}) {
  if (!reqUrl) {
    return;
  }
  type = type.toUpperCase();
  reqUrl = '/wish' + reqUrl;
  if (type === 'GET') {
    let dataStr = ''; // 数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      reqUrl = reqUrl + '?' + dataStr;
    }
  }
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: reqUrl,
      data: data,
    }).then(
      res => {
        resolve(res);
      },
      error => {
        reject(error);
      },
    );
  });
}
