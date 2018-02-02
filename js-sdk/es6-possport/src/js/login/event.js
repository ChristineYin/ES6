import { $ } from '../common/utils.js';
import { fetchPost } from '../common/fetch.js';
import { check } from '../common/form-check.js';

export default (opts = {}) => {
  const $loginForm = $('login-form'),
        $loginBtn = $('login-btn'),
        $remeber = $('login-remember'),
        $clearAccount = $('clear-account'),
        $account = $('login-account'),
        $password = $('login-password'),
        $error = $('login-error');

  // 表单验证
  $loginForm.onsubmit = async (e) => {
    e.preventDefault(e);
    console.log(check($loginForm));
    const checkResults = check($loginForm);

    if (!checkResults.length) {
      let remeber = '0';
      if ($remeber.getAttribute('checked')) {
        remeber = '1';
      }

      const data = await fetchPost('/login', {
        account: $account.value,
        password: $password.value,
        remeber: remeber
      })

      if (data.code === 200) {
        opts.success && opts.success();
      } else {
        $error.innerHTML = data.message;
      }
    } else {
      const name = checkResults[0].name;
      const type = checkResults[0].type;
      if (type === 'present') {
        if (name === 'account') {
          $error.innerHTML = '请填写您的用户名';
        } else if (name === 'password') {
          $error.innerHTML = '密码错误';
        }
      }
    }
  }

  $account.oninput = () => {
    if ($account.value.length) {
      $clearAccount.style.display = 'block';
    } else {
      $clearAccount.style.display = 'none';
    }

    $error.innerHTML = '';
  }

  $password.oninput = () => {
    $error.innerHTML = '';
  }

  $clearAccount.onclick = () => {
    $account.value = '';
    $clearAccount.style.display = 'none';
  }

}
