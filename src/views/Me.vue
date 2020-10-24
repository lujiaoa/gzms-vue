<template>
  <div>
    <mt-header title="个人主页">
      <mt-button slot="left" icon="back"></mt-button>
      <mt-button slot="right" v-if="isLogin == '1'" @click="out"
        >退出</mt-button
      >
    </mt-header>
    <img class="head_icon" src="..\assets\footer-images\headicon.png" alt="" />
    <div class="message-out" v-if="isLogin == '0'">
      <router-link to="/login">登录</router-link>
      <span>/</span>
      <router-link to="/register">注册</router-link>
    </div>
    <div class="message-in" v-else>
      <div class="username">{{ this.username }}</div>
      <div class="isrole">{{ this.isrole == "0" ? "普通会员" : "房东" }}</div>
    </div>
    <mt-cell is-link title="设置">
      <img slot="icon" src="..\assets\footer-images\set.png" class="setIcon" />
    </mt-cell>
    <mt-cell is-link v-show="isLogin == '1'" to="/orderList" title="我的订单">
      <img
        slot="icon"
        src="..\assets\footer-images\order.png"
        class="setIcon"
      />
    </mt-cell>
    <mt-cell is-link title="联系客服">
      <img slot="icon" src="..\assets\footer-images\phone.png" alt="" />
    </mt-cell>
    <div id="my_footer">
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index">
          首页
          <img
            src="..\assets\footer-images\index_enabled.png"
            slot="icon"
            v-if="tabbar == 'index'"
          />
          <img
            src="..\assets\footer-images\index_disabled.png"
            slot="icon"
            v-else
            alt=""
          />
        </mt-tab-item>
        <mt-tab-item id="me" class="MyFontStyle">
          我的
          <img
            src="..\assets\footer-images\me_enabled.png"
            slot="icon"
            v-if="tabbar == 'me'"
            alt=""
          />
          <img
            src="..\assets\footer-images\me_disabled.png"
            slot="icon"
            v-else
            alt=""
          />
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<style scoped>
.mint-cell {
  border: none;
}
.mint-cell-title {
  float: right;
}
.mint-cell-value {
  border: none;
}
.login,
.register {
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
.message-out,
.message-in {
  text-align: center;
  margin: 10px 0;
}
.message-out a {
  text-decoration: none;
  color: black;
}
.message-out span {
  display: inline-block;
  margin: 0 5px;
}
.username {
  font-size: 18px;
  font-weight: bold;
}
.isrole {
  margin-top: 7px;
  font-size: 13px;
}
/* header{
  background: #aa5
} */
/* .MyFontStyle{
   color: #707070;
} */
/* .mint-tabbar>.is-selected{
  color:#aa5 ;
} */
</style>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isLogin: localStorage.getItem("isLogined")
        ? localStorage.getItem("isLogined")
        : "0",
      username: localStorage.getItem("uname")
        ? localStorage.getItem("uname")
        : "",
      isrole: localStorage.getItem("isrole")
        ? localStorage.getItem("isrole")
        : "0",
      tabbar: "me",
    };
  },
  watch: {
    tabbar(value) {
      if (value == "me") {
        this.$router.push("/me").catch((e) => {});
        console.log(this.isLogined);
      } else if (value == "index") {
        this.$router.push("/").catch((e) => {});
      }
    },
  },
  methods: {
    ...mapMutations(["logout"]),
    out() {
      this.$messagebox.confirm("是否确定退出?").then((action) => {
        this.logout();
        this.isLogin = "0";
        this.username = "";
        this.isrole = "0";
      });
    },
  },
};
</script>