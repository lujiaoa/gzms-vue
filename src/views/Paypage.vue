<template>
  <div class="paypage">
    <!-- 页头标签开始 -->
    <div>
      <mt-header :title="titleName">
        <mt-button slot="left" icon="back"></mt-button>
      </mt-header>
    </div>
    <!-- 页头标签结束 -->
    <!-- 页面部分开始 -->
    <div class="main">
      <!-- 内容盒子 -->
      <div class="contentBox">
        <van-cell-group>
          <van-cell title="入离日期" :value="'共' + liveCount + '晚'" is-link />
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
            <span class="custom-count">已选0人</span>
          </template>
        </van-cell>
        <div class="btn-margin">
          <van-button icon="add-o" type="primary" size="small"
            >增加/编辑</van-button
          >
        </div>
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
            is-link
            arrow-direction="down"
            value="￥308"
          />
          <van-cell title="房东优惠" is-link value="无可用优惠"></van-cell>
          <van-cell title="平台优惠" is-link value="无可用优惠"></van-cell>
        </van-cell-group>
        <van-row class="row-top">
          <van-col offset="12" span="12">
            <span class="pay-price">本单您需支付￥{{+Amount}}</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 第三个内容盒子结束时 -->
    <!-- 支付方式开始 -->
    <div class="contentBox">
      <van-cell title="支付方式" is-link @click="showPopup">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="wechat" class="pay-icon" />
          <span>{{payment}}</span>
        </template>
      </van-cell>
      <van-popup
        v-model="show"
        closeable
        position="bottom"
        close-icon="cross"
        :style="{ height: '30%' }"
      >
        <div class="paybox">
          <van-cell title="微信支付" icon="wechat" @click="changePlay('微信')">
            <template #right-icon>
              <van-icon :name="weState"  />
            </template>
          </van-cell>
          <van-cell title="支付宝支付" icon="alipay" @click="changePlay('支付宝')">
            <template #right-icon>
              <van-icon :name="aliState"  />
            </template>
          </van-cell>
        </div>
      </van-popup>
    </div>
    <!-- 支付方式结束 -->
    <!-- 确定支付开始 -->
    <div>
      <van-submit-bar 
      :price="(+Amount)*100" 
      :button-text=" '去支付'" 
      @submit="onSubmit" />
    </div>
    <!-- 确定支付结束 -->
    <!-- 页面部分结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleName: "",
      // 入住时间：
      checkIn: "2020.10.18",
      checkOut: "2020.10.23",
      // 共居住几晚
      liveCount: "2",
      // 房源信息
      Housinginformation: "整套·55平·1居·宜居住2人",
      // 默认让弹出层隐藏
      show: false,
      weState:'weState',
      aliState:"success",
      payment:"支付宝",
      Amount:"100.00"
    };
  },
  methods: {
    popMes() {
      this.$dialog
        .alert({
          title: "退订规则",
          width: "250",
          message:
            "chekIn 14：00前取消，所有金额全部退还，\ncheckOut 14:00后取消，扣除未入住首日房费",
          confirmButtonText: "我知道了",
          confirmButtonColor: "#000",
          messageAlign: "left",
        })
        .then(() => {
          // on close
        });
    },
    // 控制弹出层弹出
    showPopup() {
      this.show = true;
    },
    // 用来修改支付方式
    changePlay(value){
      this.payment=value
      // 将弹出层设置为隐藏
      this.show= false
    },
    // 确定支付
    onSubmit(){
      console.log('ok')
    }
  },
  watch:{
    // 监听支付方式，通过当前支付方式来控制弹出层的箭头
    payment(newValue,oldValue){
      switch (newValue){
        case "微信":
          this.weState='success';
          this.aliState=oldValue;
          break;
        case "支付宝":
          this.aliState='success';
          this.weState=oldValue
          break;
      }
    }
  }
};
</script>

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
  background-image: linear-gradient(to bottom, #28c76f, #fff);
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