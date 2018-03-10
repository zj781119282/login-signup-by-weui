<template>
  <div class="weui-cell weui-cell_vcode">
    <div class="weui-cell__hd">
      <label class="weui-label">
        手机号
      </label>
    </div>
    <div class="weui-cell__bd">
      <input type="tel" class="weui-input" placeholder="请输入手机号"/>
    </div>
    <div class="weui-cell__ft">
      <button class="weui-vcode-btn">
        获取验证码
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'phone',
  };
</script>
