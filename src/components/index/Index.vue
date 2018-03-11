<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">
        已登录
      </div>
      <div class="page__desc">
        保留登录状态
      </div>
    </div>

    <div class="weui-btn-area">
      <a href="javascript:;" @click="logout();" class="weui-btn weui-btn_primary">
        注销
      </a>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';

  export default {
    name: 'index',
    mounted() {
      const isLogged = Cookies.get('isLogged');
      console.log(isLogged);
      if (!isLogged || isLogged === 'false') {
        this.$router.push('/');
      }
    },
    methods: {
      logout() {
        Cookies.set('isLogged', false, { expires:1 });
        this.$router.push('/');
      },
    },
  };
</script>
