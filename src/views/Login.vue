<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="乐途古镇">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/register" slot="right" class="shortcut">
          注册
        </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
        <mt-field 
          type="text" 
          label="用户名"
          placeholder="请输入用户名"
          :attr="{maxlength:15}"
          v-model="uname"
          :state="unameState"
          @blur.native.capture="checkUname">
        </mt-field>   

        <mt-field 
          type="password" 
          label="密码"
          placeholder="请输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model="upwd"
          :state="upwdState"
          @blur.native.capture="checkupwd">
        </mt-field>   


        <mt-button type="primary" size="large" @click="handle">快速登录</mt-button>    
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<style scoped>
.shortcut{
  text-decoration: none;  
}
</style>

<script>
 import axios from 'axios'
export default {
  data(){
    return {
      // 用户名
      uname:'',
      // 密码
      upwd:'',
      // 确认密码
      conupwd:'',
      // 用户名的状态
      unameState:'',
      // 密码的状态
      upwdState:''
    }
  },
  methods:{
    //校验用户名
    checkUname(){  
      let unameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if(unameRegExp.test(this.uname)){
        this.unameState = 'success';
        return true;
      } else {
        this.unameState = 'error';
        this.$toast({
          message:"用户名为必填项",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    //校验密码
    checkupwd(){
      //密码的正则表达式
      let upwdRegExp = /^[0-9A-Za-z]{8,20}$/;
      if(upwdRegExp.test(this.upwd)){
        return true;
      } else {
        this.$toast({
          message:"密码必须为字母、数字的组合体",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },   
    handle(){
      if(this.checkUname() && this.checkupwd()){
        //该将获取到的信息提交到WEB服务器
        let obj = {
          uname:this.uname,
          upwd:this.upwd,
          
        }
        //分发Actions
        this.$store.dispatch('login',obj)
        // this.$store.dispatch(???,????);
        // this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
        //     //用户登录成功
        //     if(res.data.code == 1){
        //       //提交Mutations
        //       this.$store.commit('logined');
        //       //为什么还要往webstorage中存储呢?因为用户刷新后数据依然要保持
        //       localStorage.setItem('isLogined','1');
        //       this.$router.push('/');
        //     } else {
        //       this.$messagebox("登录提示","用户名或密码错误");
        //     }
        // })
      }
    }
  }
}
</script>