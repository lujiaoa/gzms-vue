<template>
  <div class="paypage">
    <!-- 页头标签开始 -->
    <div>
      <mt-header :title="titleName" fixed >
        <router-link to="/orderList" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 页头标签结束 -->
    <!-- 页面部分开始 -->
    <div class="main">
      <!-- 内容盒子 -->
      <div class="contentBox">
        <van-cell-group>
          <van-cell title="入离日期" :value="'共' + liveCount + '晚'" />
          <van-cell :value="`${this.checkIn} 14:00  至  ${this.checkOut} 12:00`" />
          <van-cell :title="Housinginformation" class="van-ellipsis" />
          <van-cell
            title="预约后取消扣除部分房费"
            icon="info-o"
            class="fontColor"
            @click="popMes"
          ></van-cell>
        </van-cell-group>
      </div>
      <!-- 第二个内容盒子 -->
      <div class="contentBox">
        <van-cell>
          <template #title>
            <span class="custom-title">入住人信息</span>
          </template>
        </van-cell>
          <van-cell title="姓名" :value="pName" />
          <van-cell title="电话" :value="pPhone" />
          <van-cell title="身份证" :value="pId" />
        <van-divider
          dashed
          :style="{ borderColor: '#9B9B9B', margin: '10px 10px 0' }"
        ></van-divider>
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <van-tag color="rgb(71,189,167)">获赠保险</van-tag>
            <span class="text-l">免费赠送最高保额31万住宿旅行意外</span>
          </template>
        </van-cell>
      </div>
      <!-- 第二个内容盒子结束 -->
      <!-- 第三个内容盒子开始 -->
      <div class="contentBox">
        <van-cell-group>
          <van-cell
            :title="'房费' + liveCount + '晚'"
            :value="`￥${parseFloat(Amount).toFixed(2)}`"
          />
          <van-cell title="房东优惠" is-link value="无可用优惠"></van-cell>
          <van-cell title="平台优惠" is-link value="无可用优惠"></van-cell>
        </van-cell-group>
      </div>
    </div>
    <!-- 第三个内容盒子结束时 -->
    <!-- 支付方式开始 -->
    <div class="contentBox">
      <van-cell title="合计">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <span>¥{{parseFloat(Amount).toFixed(2)}}</span>
        </template>
      </van-cell>
    </div>
    <!-- 支付方式结束 -->
    <!-- 页面部分结束 -->
  </div>
</template>

<script>
export default {
  props:['oid'],
  data() {
    return {
      titleName: "",
      // 入住时间：
      checkIn: "",
      checkOut: "",
      // 共居住几晚
      liveCount: "",
      // 房源信息
      Housinginformation: "整套·55平·1居·宜居住2人",
      // 默认让弹出层隐藏
      show: false,
      Amount:"",
      pName:"",
      pId:"",
      pPhone:""
    };
  },
  methods: {
    popMes() {
      this.$dialog
        .alert({
          title: "退订规则",
          width: "250",
          message:
            `${this.checkIn} 14：00前取消，所有金额全部退还，\n${this.checkOut} 14:00后取消，扣除未入住首日房费`,
          confirmButtonText: "我知道了",
          confirmButtonColor: "#000",
          messageAlign: "left",
        })
        .then(() => {
          // on close
        });
    },
    getOrderList(oid){
      this.$indicator.open({
        text:"加载中",
        spinnerType:"double-bounce"
      });
      this.axios.get(`/orderDetails?oid=${this.oid}`).then(res=>{
        var data=res.data.results;
        this.checkIn=this.moment.unix(res.data.results.enter_time).format('Y-MM-DD');
        this.checkOut=this.moment.unix(res.data.results.leave_time).format('Y-MM-DD');
        this.liveCount=this.moment.unix(res.data.results.leave_time).diff(this.checkIn,'day');
        this.Housinginformation=`${res.data.results.old_town}·${res.data.results.r_room}居${res.data.results.r_bed}床,适居${res.data.results.r_people}人`;
        this.Amount=res.data.results.all_price;
        this.pName=res.data.results.o_enter_person_name;
        this.pId=res.data.results.o_enter_person_idcard;
        this.pPhone=res.data.results.o_enter_person_phone;
        this.titleName=res.data.results.r_title;
        this.$indicator.close();
      });
    }
  },
  watch:{
    
  },
  mounted(){
    //初始化获取订单详情
    this.getOrderList(this.oid);
  }
};
</script>

<style>
.van-cell__title {
    font-size: 14px !important;
    font-weight: 800 !important;
}
</style>

<style scoped>
.contentBox {
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 0 20px 10px;
  background: #fff;
  box-shadow: 4px 7px 8px #ccc;
}
/* 设置背景过渡效果 */
.main {
  padding-top: 10px;
  margin-top: 40px;
  /* background-image: linear-gradient(to bottom, #28c76f, #fff); */
  font-size: 16px;
  color: rgb(41, 40, 40);
}
/* 字体颜色 */
.fontColor {
  color: #f6416c;
}
/* 使用插槽来写入住人信息 */
.custom-title {
  margin-right: 10px;
  vertical-align: middle;
}
.custom-count {
  color: #f6416c;
  line-height: inherit;
  font-size: 12px;
}
.btn-margin {
  margin-left: 12px;
}
.text-l {
  margin-left: 5px;
}
.row-top {
  margin-top: 10px;
  /* font-size:16px; */
}
.pay-price {
  display: inline-block;
  width: 100%;
  font-size: 14px;
  text-align: center;
}
/* 支付选择图标 */
.pay-icon {
  margin-top: 6px;
  margin-right: 10px;
}
.paybox {
  margin-top: 40px;
  padding: 0 20px;
}
/* 总价钱样式 */
.amount{
  font-size: 12px;
}
.amount>span{
  font-size: 18px;
  color: #f6416c;
}
</style>