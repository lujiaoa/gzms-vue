import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 入住时间时间戳
    checkIn:1603005487,  
    // 离店时间时间戳
    checkOut:1603091887,
    // 用户名登录真实姓名
    RealName:"华山论剑",
    // 用户的省份证号，经过修改的xxxx
    userID:"131320xxxxxx000" 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
