import { $ } from '../common/utils.js';

const tpl = (opts = {}) => {
  const autocompleteTpl = 
  `<div id="no-autocomplete">
    <input type="text" />
    <input type="password" />
  </div>`;

  const autocompleteAdapter = opts.autocomplete ? autocompleteTpl : '';
  const autocompleteValue = opts.autocomplete ? 'on' : 'off';

  const tpl = `
    <div id="login-wrapper">
      <p class="login-error" id="login-error"></p>
      <form id="login-form">
        ${ autocompleteAdapter }
        <label class="login-account-wrapper">
          <span class="account-label">${ opts.accountLabel }</span>
          <input type="text" name="account" id="login-account" placeholder="${ opts.accountPlaceholder }" autocomplete=${ opts.autocompleteValue } valid="present"/>
          <span id="clear-account" class="del"></span>
        </label>

        <label class="login-password-wrapper">
          <span class="password-label">${ opts.passwordLabel }</span>
          <input type="password" name="password" id="login-password" placeholder="${ opts.passwordPlaceholder }" autocomplete=${ opts.autocompleteValue } valid="present"/>
        </label>

        <label class="login-verify-wrapper" style="display: none">
          <span class="verify-label">验证码:</span>
          <input type="text" id="login-verify" name="verifyCode" placeholder="${ opts.verifyPlaceholder }"/>
          <img />
        </label>

        <label class="login-remember-wrapper" style="display: ${ opts.showRemember }">
          <span>记住密码:</span>
          <input type="checkbox" id="login-remember" name="remember"/>
        </label>

        <input type="submit" value="${ opts.loginBtnText }" id="login-btn" class="login-btn" />
      </form>
      <div class="login-extra-wrapper">
        <a href="forget.html">忘记密码</a>
        <a href="register-mobile.html">免费注册</a>
      </div>
    </div>`;

  return tpl;
}

export default (conf = {}) => {
  conf.container.innerHTML = tpl(conf);
  const $noAutocomplete = $('no-autocomplete');

  if ($noAutocomplete) {
    $noAutocomplete.style.opacity = '0';
    $noAutocomplete.style.height = '0';
  }
}