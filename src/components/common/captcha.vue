<template>
  <div class="weui-cell">
    <div class="weui-cell__hd">
      <label class="weui-label">
        验证码
      </label>
    </div>
    <div class="weui-cell__bd">
      <input type="text" class="weui-input" placeholder="请输入验证码"/>
    </div>
    <div class="weui-cell__ft" v-if="!isPhone">
      <img src="../../assets/vcode.jpg" class="weui-vcode-img"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'captcha',
    props: [
      'isPhone',
    ],
  };
</script>
