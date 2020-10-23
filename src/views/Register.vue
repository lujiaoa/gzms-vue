<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="乐途古镇">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/login" slot="right" class="shortcut">
          登录
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
          @blur.native.capture="checkuname">
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

        <mt-field 
          type="password" 
          label="确认密码"
          placeholder="请再次输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model="conupwd"
          :state="conupwdState"
          @blur.native.capture="checkConupwd">
        </mt-field>   
<!-- 手机号 -->
        <mt-field 
          type="phone" 
          label="手机号"
          placeholder="请输入手机号"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model="phone"
          :state="phoneState"
          @blur.native.capture="checkPhone">
        </mt-field>   
<!-- 姓名 -->
<mt-field 
          type="text" 
          label="真实姓名"
          placeholder="请输入您的真实姓名"
          :attr="{maxlength:15}"
          v-model="user_name"
          :state="user_nameState"
          @blur.native.capture="checkuser_name">
        </mt-field>   

<!-- 身份证 -->
 <mt-field 
          type="number" 
          label="身份证"
          placeholder="请再次您的身份证号"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model="user_id"
          :state="user_idState"
          @blur.native.capture="checkuser_id">
        </mt-field>   
    <mt-radio
		  v-model="value"
		  :options="options" @change="check" :state='isrole'>
		</mt-radio>

        <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>    
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
export default {
  data(){
    return {
     isrole:0,
      // 用户名
      uname:'',
      // 密码
      upwd:'',
      // 确认密码
      conupwd:'',
       phone:'',
       user_name:'',
       user_id:'',
      // 用户名的状态
      unameState:'',
      // 密码的状态
      upwdState:'',
      // 确认密码的状态
      conupwdState:'',
     
      phoneState:'',
      user_nameState:'',
      user_idState:'',
      value: '0',
			// radio的选项
			options : [{
		    label: '普通用户',
		    value: '0'
			},
			{
		    label: '房东',
		    value: '1'
			}]

    }
  },
  methods:{
    // 判断是房东还是普通用户
      check(){
      // console.log(this.value)
      if(this.value=='1'){
        this.isrole='1'
      }else{
        this.isrole='0'
      }
      // console.log(this.isrole);
		},
    //校验用户名
    checkuname(){  
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
    // 校验确认密码
    checkConupwd(){
      if(this.upwd != this.conupwd){
        this.$toast({
          message:"两次密码不一致",
          position:"top",
          duration:"2000"
        });
        return false;
      } else {
        return true;
      }
    },
// 校验手机号
    checkPhone(){
 let phoneRegExp=/^1[3|4|5|7|8][0-9]{9}$/;
      if(phoneRegExp.test(this.phone)){
        return true;
      } else {
        this.$toast({
          message:"手机号必须符合格式",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    // 校验真实姓名
 checkuser_name(){  
      let user_nameRegExp = /^[\u4e00-\u9fa5]{2,20}$/;
      if(user_nameRegExp.test(this.user_name)){
        this.user_nameState = 'success';
        return true;
      } else {
        this.user_nameState = 'error';
        this.$toast({
          message:"真实姓名为必填项",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    // 校验身份证号
    checkuser_id(){
      
      let user_idRegExp = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if(user_idRegExp.test(this.user_id)){
        return true;
      } else {
        this.$toast({
          message:"身份证号必须符合格式",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    handle(){
      // &&this.checkPhone()&&this.checkuser_name()&&this.checkuser_id()
      // &&this.checkConupwd()&&this.checkPhone()&&this.checkuser_name()&&this.checkuser_id()
      if(this.checkuname() && this.checkupwd()&&this.checkConupwd()&&this.checkPhone()&&this.checkuser_name()&&this.checkuser_id()){
        //该将获取到的信息提交到WEB服务器
        this.axios.post('/register','uname=' + this.uname + '&upwd=' + this.upwd + '&isrole=' +parseInt(this.isrole) + '&phone=' + this.phone + '&user_name=' + this.user_name + '&user_id=' + this.user_id).then(res=>{
            //用户注册成功
            if(res.data.code == 1){
                this.$router.push('/login');
                console.log('注册成功');
            } else{
                this.$messagebox('注册提示','用户名已经占用');
            }
        });
      }
    }
  }
}
</script>