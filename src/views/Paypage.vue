<template>
  <div class="paypage">
    <!-- 页头标签开始 -->
    <div>
      <mt-header :title="titleName" class="bgColor">
        <router-link :to="`/details/${rid}`" slot="left">
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
          <van-cell
            title="入离日期"
            :value="'共' + getLiveDay + '晚'"
            is-link
            @click="dateShow = true"
            :label="`${this.getCheckIn}- ${this.getCheckOut}`"
          />
          <!-- 时间弹出层 -->
          <van-calendar
            v-model="dateShow"
            type="range"
            @confirm="onConfirm"
            text="123"
            color="#07c160"
            confirm-disabled-text="请选择离店时间"
            :formatter="formatter"
          >
            <template #title>
              <p>我就是我</p>
            </template>
          </van-calendar>
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
        <div class="btn-margin">
          <div class="checkinPerson" v-if="RealName">
            <div>
              <span class="liveinfo">{{ RealName }}</span>
              <van-tag type="success">获赠保险</van-tag>
            </div>
            <div>
              <span class="liveinfo">身份证号</span>
              <span>{{ userID }}</span>
            </div>
          </div>
          <div class="checkinPerson" v-else>
            <van-button
              type="primary"
              size="small"
              @click="
                () => {
                  $router.push('/');
                }
              "
              >请登录</van-button
            >
          </div>
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
            :title="'房费' + getLiveDay + '晚'"
            is-link
            arrow-direction="down"
            :value="`￥${Amount}`"
          />
          <van-cell title="房东优惠" is-link value="无可用优惠"></van-cell>
          <van-cell title="平台优惠" is-link value="无可用优惠"></van-cell>
        </van-cell-group>
        <van-row class="row-top">
          <van-col offset="12" span="12">
            <span class="pay-price">本单您需支付￥{{ +Amount }}</span>
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
          <span>{{ payment }}</span>
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
              <van-icon :name="weState" />
            </template>
          </van-cell>
          <van-cell
            title="支付宝支付"
            icon="alipay"
            @click="changePlay('支付宝')"
          >
            <template #right-icon>
              <van-icon :name="aliState" />
            </template>
          </van-cell>
        </div>
      </van-popup>
    </div>
    <!-- 支付方式结束 -->
    <!-- 确定支付开始 -->
    <div>
      <van-submit-bar
        :price="+Amount * 100"
        label="你需支付:"
        text-align="left"
        :button-text="'去支付'"
        @submit="onSubmit"
      />
    </div>
    <!-- 确定支付结束 -->
    <!-- 页面部分结束 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      titleName: "",
      // 入住时间：
      checkIn: this.$store.state.checkIn,
      checkOut: this.$store.state.checkOut,
      // 房源信息
      Housinginformation: "整套·55平·1居·宜居住2人",
      // 默认让弹出层隐藏,这个是支付弹出层
      show: false,
      // 默认让时间弹出层隐藏
      dateShow: false,
      weState: "weState",
      aliState: "success",
      payment: "支付宝",
      // 房子一晚单价
      unitPrice: 100,
      // 设置一个开关，防止用户频繁提价
      isSubmit: true,
      // 订单状态，目前都是成功
      status: 2,
      // 房源id
      rid: "",
    };
  },
  methods: {
    popMes() {
      this.$dialog
        .alert({
          title: "退订规则",
          width: "250",
          message: `${this.getCheckIn} 14：00前取消，所有金额全部退还，\n ${this.getCheckOut} 14:00后取消，扣除未入住首日房费`,
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
    // 操作时间组件
    formatDate(date) {
      // 返回的是时间戳
      return `${this.moment(date).valueOf() / 1000}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.dateShow = false;
      this.checkIn = `${this.formatDate(start)}`;
      this.checkOut = ` ${this.formatDate(end)}`;
    },
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 10) {
        if (date === 25) {
          day.type = "disabled";
        }
      }
      if (day.type == "start") {
        day.bottomInfo = "入住";
      } else if (day.type == "end") {
        day.bottomInfo = "离店";
      }
      return day;
    },
    // 用来修改支付方式
    changePlay(value) {
      this.payment = value;
      // 将弹出层设置为隐藏
      this.show = false;
    },
    // 确定支付
    onSubmit() {
      if (this.isSubmit) {
        // console.log('ok')
        // 将开关关闭
        this.isSubmit = false;
        // 获取当前时间
        let current_time = Math.floor(+this.moment(new Date()) / 1000);
        let phone = 17699903015;
        // 向数据库添加用户订单
        let save = {
          r_uid: 1,
          o_rod: this.$route.params.id,
          status: this.status,
          order_time: current_time,
          enter_time: this.checkIn,
          leave_time: this.checkOut,
          all_price: this.Amount,
          o_enter_person_name: this.RealName,
          o_enter_person_phone: phone,
          o_enter_person_idcard: this.userID,
        };
        // console.log( save )
        let saveorder = this.qs.stringify(save);
        this.axios.post("/saveorder", saveorder).then((res) => {
          // 用来接收服务器传来的数据
          let data = res.data;
          if (data.code == 1) {
            // 将开关打开，
            this.isSubmit = true;
            // 支付成功后跳转到支付成功页面
            // this.$router.push('/paysuccess')
            window.location.replace("#/paysuccess");
            // console.log(data)
          } else {
            Toast.fail("支付失败，请再次提交");
          }
        });
      } else {
      }
    },
  },
  watch: {
    // 监听支付方式，通过当前支付方式来控制弹出层的箭头
    payment(newValue, oldValue) {
      switch (newValue) {
        case "微信":
          this.weState = "success";
          this.aliState = oldValue;
          break;
        case "支付宝":
          this.aliState = "success";
          this.weState = oldValue;
          break;
      }
    },
  },
  computed: {
    // 计算入住和离店之前相差的天数
    getLiveDay() {
      return (this.checkOut - this.checkIn) / (1 * 24 * 60 * 60);
    },
    // 计算住店日期
    getCheckIn() {
      return this.moment.unix(this.checkIn).format("MM 月 DD 日");
    },
    // 计算离店日期
    getCheckOut() {
      return this.moment.unix(this.checkOut).format("MM 月 DD日");
    },
    // 支付总价
    Amount() {
      return this.unitPrice * +this.getLiveDay;
    },
    // 从vuex中获取时间戳
    ...mapState({
      vxcheckIn: "checkIn",
      RealName: "RealName",
      userID: "userID",
    }),
  },
  // 挂载
  mounted() {
    let id = this.$route.params.id;
    // 将房源id传入变量中
    this.rid = id;
    // 获取当前时间毫秒数
    let time = Math.floor(+this.moment(new Date()) / 1000);
    // console.log(time)
    // console.log(id)
    //接受地址栏传过来的信息，用来去请求房源详情表
    this.axios.get("/getGzhome?id=" + id + "&time=" + time).then((res) => {
      // console.log(res.data )
      // let data = res.data.
      let [enter_time, leave_time] = res.data.result;
      // console.log( enter_time)
      let results = res.data.results[0];
      // console.log(results);
      this.Housinginformation = `整套·${results.r_room}室·${results.r_hall}厅·${results.r_toilet}卫·宜居住${results.r_people}人`;
      // 获取房子单价
      this.unitPrice = results.r_price;
      // 修改房子标题
      this.titleName = results.r_title;
      // console.log( res.data.results[0].r_title)
      // 我靠，又提交失败了
      // 我靠，又提交失败了
      // 我靠，又提交失败了
      // 我靠，又提交失败了
      // 24号提交
    });
  },
};
</script>

<style scoped>
/* 设置表头背景颜色 */
.bgColor {
  background-color: #aa5;
}
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
  background-image: linear-gradient(to bottom, #aa5, #fff);
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
  margin-left: 10px;
}
/* 设置入住人信息 */
.checkinPerson {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 12px;
}
.liveinfo {
  display: inline-block;
  position: relative;
  bottom: -4px;
  margin-right: 10px;
  width: 60px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.amount {
  font-size: 12px;
}
.amount > span {
  font-size: 18px;
  color: #f6416c;
}
</style>