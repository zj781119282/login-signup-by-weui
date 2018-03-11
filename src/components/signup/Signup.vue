<template>
  <div class="page input js_show">
    <div class="page__hd">
      <div class="page__title">
        注册
      </div>
    </div>

    <phone/>
    <captcha :isPhone="true"/>
    <user/>
    <password/>


    <div class="weui-btn-area">
      <a href="javascript:;" class="weui-btn weui-btn_primary">
        注册
      </a>
    </div>

    <div class="weui-footer">
      <p class="weui-footer__links">
        <router-link to="/" class="weui-footer__link">
          已有账号, 去登录
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';

  import user from '../common/user';
  import password from '../common/password';
  import phone from '../common/phone';
  import captcha from '../common/captcha';

  export default {
    name: 'signup',
    mounted() {
      if (Cookies.get('isLogged') === 'true') {
        this.$router.push('index');
      }
    },
    components: {
      user,
      password,
      phone,
      captcha,
    },
  };
</script>

<style scoped>
  .page__hd {
    margin-bottom: 40px;
  }
  .page__title {
    font-size: 20px;
  }
  .weui-footer {
    margin-top: 20px;
  }
</style>
