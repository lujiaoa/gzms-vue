<template>
  <div>
    <!-- 顶部导航开始 -->
    <div>
      <mt-header fixed title="我的订单">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 面板开始 -->
    <div  class="main" 
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
      v-infinite-scroll="loadMore"
      infinite-scroll-immediate-check="true"
      >
      <!-- 搜索框开始(目前没有实际功能) -->
      <form action="/">
        <van-search
          v-model="svalue"
          show-action
          placeholder="请输入搜索关键词"
        />
      </form>
      <!-- 搜索框结束 -->
      <mt-tab-container>
        <mt-tab-container-item >
          <!-- 单一文档信息开始 -->
          <div>
            <div class="contentBox" v-for="(a,i) of orders" :key="i">
              <router-link :to="`/order/${a.oid}`" class="card">
                <!-- 缩略图及简介开始 -->
                <img src="../assets/img/1-1.png" alt="">
                <div class="oitem">
                  <p>{{a.r_title}}</p>
                  <p>{{a.old_town}}·{{a.r_room}}居{{a.r_bed}}床,适居{{a.r_people}}人</p>
                  <p>{{moment.unix(a.order_time).format('Y-MM-DD HH:mm')}}<span>¥{{a.all_price.toFixed(2)}}</span></p>
                </div>
                <!-- 缩略图及简介结束 -->
              </router-link>
            </div>
          </div>
          <!-- 单一文档信息结束 -->
        </mt-tab-container-item>
      </mt-tab-container>
      <div v-show="page>=pagecount" class="endLine">我是底线</div>
    </div>
    <!-- 面板结束 -->
  </div>
</template>
<style scoped>
/* 卡片子项样式 */
.oitem p{
  line-height: 14px;
  padding: 5px 8px;
}
.oitem p:first-child{
  height: 28px;
  vertical-align:middle;
  font-weight: 700;
}
.oitem p:nth-child(3){
  color: #ccc;
}
.oitem p:nth-child(3) span{
  display: inline-block;
  color: rgb(255,200,121);
  width: 76px;
  font-size: 16px;
  margin-left: 30px;
  font-weight: 700;
  text-align: right;
}
.oitem{
  padding: 10px 0;
}
/* 卡片连接样式 */
.card{
  display: flex;
  text-decoration: none;
  color:rgb(41, 40, 40);
}
.card img{
  width: 95px;
  height: 106px;
}
/* 卡片样式 */
.contentBox {
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 0 20px 10px;
  background: #fff;
  box-shadow: 4px 7px 8px #ccc;
}
/* 设置列表字体颜色 */
.main {
  margin-top: 40px;
  font-size: 14px;
  color: rgb(41, 40, 40);
}
/* 底线样式 */
.endLine{
  color: #666;
  text-align: center;
  font-size:14px;
  padding:5px 0;
  background-color: #f5f5f5;
}
</style>
<script>
export default {
  data(){
    return {
      svalue:'',
      orders:[],
      busy:false,
      page:1,
      pagecount:0
    }
  },
  methods:{
    getOrderList(uid,role,page){
      this.$indicator.open({
        text:"加载中",
        spinnerType:"double-bounce"
      });
      this.busy=true;
      this.axios.post('/orderList',`uid=${localStorage.getItem('uid')}&role=${localStorage.getItem('role')}&page=1`).then(res=>{
        this.pagecount=res.data.pagecount;
        var data=res.data.results;
        data.forEach((item,i,arr)=>{
          this.orders.push(item);
        });
          this.busy=false;
          this.$indicator.close();
      });
    },
    loadMore(){
      this.page++;
      if(this.page<=this.pagecount){
          this.getOrderList(localStorage.getItem('uid'),localStorage.getItem('role'),this.page);
      }
    }
  },
  watch:{

  },
  mounted(){
    //初始化获取订单列表
    this.getOrderList(localStorage.getItem('uid'),localStorage.getItem('role'),this.page);
  }
}
</script>