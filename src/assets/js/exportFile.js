import host from '@/axios/host'
import { Message } from 'element-ui'
/**
 * @param {string} url
 *  请求url
 * @param {object} data
 *  请求参数
 */
let exportFile = (obj) => {
  let {url , data} = obj;
  let iframe = document.createElement('iframe');
  let name = `iframe-${+ new Date()}`;
  iframe.name = name;
  iframe.style.display = 'none';
  let arr = [];

  for(let key in data) {
    (data[key] !== void 0) && arr.push(`${key}=${data[key]}`);
  };
  try{
    arr.push(`token=${JSON.parse(localStorage.getItem('loginInfo')).token}`);
    iframe.src = host.target + url + '?' + arr.join('&');
    console.log(iframe.src)
    iframe.onload = function() {
      // 获取 iframe window对象
      let i_window = window.frames[name];
      // 获得body
      let body = i_window.document.body;
      // 获得body后台返回的参数
      let html = body.innerText;
      console.log(html,'iframe导出-后台返回值');
      try {
        let res = JSON.parse(html);
        if(res.code === '7777') {
          Message({
            type: 'warning',
            message: res.description,
          });
        }
      }catch(err) {
        
      }
    };

    document.body.appendChild(iframe);
  }catch(err) {

  }
}

export default exportFile
