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
            <!-- <span class="custom-count">已选0人</span> -->
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
      </div>
    </div>
    <!-- 第三个内容盒子结束时 -->
    <!-- 支付方式开始 -->
    <div class="contentBox">
      <van-cell title="合计">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <span>¥{{Amount}}</span>
        </template>
      </van-cell>
    </div>
    <!-- 支付方式结束 -->
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

  },
  watch:{
    
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