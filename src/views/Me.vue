<template> 
  <div>
      <mt-header title="个人主页">
          <mt-button slot="left" icon='back'></mt-button>
      </mt-header>
      <img class="head_icon" src="..\assets\footer-images\headicon.png" alt="">
      <div class="message-out" v-if="isLogin=='0'">
          <router-link to="">登录</router-link>
          <span>/</span>
          <router-link to="">注册</router-link>
      </div>
      <div class="message-in" v-else>
          <div class="username">{{this.username}}</div>
          <div class="ismember">{{this.isMember=='0'?'普通会员':'超级会员'}}</div>
      </div>
    <mt-cell is-link title="设置">
      <img
        slot="icon"
        src="..\assets\footer-images\set.png"
        class="setIcon"
      />
    </mt-cell>
    <mt-cell is-link v-show='isLogin=="1"' title="我的订单">
        <img
        slot="icon"
        src="..\assets\footer-images\order.png"
        class="setIcon"
      />
    </mt-cell>
    <mt-cell is-link title="联系客服">
        <img slot="icon" src="..\assets\footer-images\phone.png" alt="">
    </mt-cell>
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
.mint-cell {
  border: none;
}
.mint-cell-title{
  float: right;
}
.mint-cell-value {
  border: none;
}
.login,
.register{
  text-decoration: none;
}
.head_icon {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid black;
  background-color: white;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  margin-top: 15px;
}
.message-out,.message-in{
    text-align: center;
    margin: 10px 0;
}
.message-out a{
    text-decoration: none;
    color: black;
}
.message-out span{
    display: inline-block;
    margin: 0 5px;
}
.username{
    font-size:18px;
    font-weight: bold;
}
.ismember{
    margin-top: 7px;
    font-size:13px;
}
</style>
<script>
export default {
  data() {
    return {
      isLogin: "1",
      username: "风的颜色",
      isMember: "0",
    };
  },
};
</script>