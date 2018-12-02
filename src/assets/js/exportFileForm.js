import host from '@/axios/host'

export default ({url = '' , data = {} , method = 'get'} = {}) => {
  let form = document.createElement('form');
  form.method = method;
  form.action = host.target + url;
  data['token'] = JSON.parse(localStorage.getItem('loginInfo')).token;
  Object.keys(data).map((k) => {
    let v = data[k];
    let input = document.createElement('input');
    input.setAttribute('value',v);
    input.setAttribute('name',k);
    form.appendChild(input);
  });
  document.querySelector('body').appendChild(form);
  form.submit();
}