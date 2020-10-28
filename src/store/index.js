import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            // 入住时间时间戳
        checkIn:1603005487,
        // 离店时间时间戳
        checkOut:1603091887,
        
        liveCount:'',
        id:'',
        // 用户名登录真实姓名
        RealName: "华山论剑",
        // 用户的省份证号，经过修改的xxxx
        userID: "131320xxxxxx000",
        // 王睿芳
        //标识用户是否已经登录
        isLogined: localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : 0,
        uname: localStorage.getItem('uname') ? localStorage.getItem('uname') : '',
        uid: localStorage.getItem('uid') ? localStorage.getItem('uid') : '',
        isrole: localStorage.getItem('isrole') ? localStorage.getItem('isrole') : ''
            // 王睿芳

    },
    mutations: {
        // 王睿芳
        logined(state, payload) {
            state.isLogined = 1;

            state.uname = payload.uname;
            state.uid = payload.uid;
            state.isrole = payload.isrole;
            localStorage.setItem('uname', payload.uname);
            localStorage.setItem('uid', payload.uid);
            localStorage.setItem('isrole', payload.isrole);
        },
        logout(state) {
            state.isLogined = 0;
            state.uname = '';
            state.uid = '';
            state.isrole = '';
            localStorage.removeItem('isLogined');
            localStorage.removeItem('isrole');
            localStorage.removeItem('uid');
            localStorage.removeItem('uname');
        },
        // 王睿芳
        checkIn(state,payload){
            state.checkIn=payload/1000
          },
          checkOut(state,payload){
            state.checkOut=payload/1000
          },
          id(state,payload){
            state.id=payload
          }
    },
    actions: {
        // 王睿芳
        login(context, payload) {
            //发送异步请求
            axios.post('/login', qs.stringify(payload)).then(res => {
                //用户登录成功
                if (res.data.code == 1) {
                    //提交Mutations
                    context.commit('logined', res.data.info);
                    localStorage.setItem('isLogined', '1');

                    router.push('/');
                    // window.alert('用户登录成功');
                } else {
                    //this.$messagebox("登录提示","用户名或密码错误");
                    //window.alert('用户登录失败');
                }
            });
        }
        // 王睿芳
    },
    modules: {}
})