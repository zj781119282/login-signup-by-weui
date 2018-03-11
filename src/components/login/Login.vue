<template>
  <div class="page input js_show">
    <div class="page__hd">
      <div class="page__title">
        登录
      </div>
    </div>

    <user/>
    <password/>
    <captcha/>

    <div class="weui-btn-area">
      <a href="javascript:;" @click="login();" class="weui-btn weui-btn_primary">
        登录
      </a>
    </div>

    <div class="weui-footer">
      <p class="weui-footer__links">
        <router-link to="/signup" class="weui-footer__link">
          注册用户
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';

  import user from '../common/user';
  import password from '../common/password';
  import captcha from '../common/captcha';
  import $ajax from '../../tools/Ajax';

  export default {
    name: 'Login',
    mounted() {
      if (Cookies.get('isLogged') === 'true') {
        this.$router.push('index');
      }
    },
    methods: {
      request() {
        $ajax({
          method: 'post',
          url:'sfasfafasfas',
          headers: {
            lang: 'en-US',
          },
          data: {
            a: 'b',
            c: 'd',
          }
        });
      },
      login() {
        Cookies.set('isLogged', true, { expires: 1 });
        this.$router.push('index');
      },
    },
    components: {
      user,
      password,
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
