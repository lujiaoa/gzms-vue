<template>
  <div class="details">
    <!-- 顶部固定 返回 -->
    <mt-header :title="info.r_title" fixed>
      <!-- 返回按钮 -->
      <span slot="left">
        <router-link :to="`/search/${info.rid}`">
          <mt-button icon="back"></mt-button>
        </router-link>
      </span>
      <!-- 更多按钮 待定 -->
      <!-- <div slot="right">
        <mt-button icon="more"></mt-button>
      </div> -->
    </mt-header>
    <!-- 1 房屋轮播图 -->
    <div class="banner">
      <mt-swipe 
        :showIndicators="true"
        :auto="4000"
        :speed="600">
	    <mt-swipe-item >
        <img src="../assets/img/r1-1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item >
        <img src="../assets/img/r1-2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item >
        <img src="../assets/img/r1-3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    </div>
    
    <!-- 正文模块 -->
    <div class="main">
      <!-- 2 房屋名称 -->
      <div class="title">
        <p><b>{{info.r_title}}</b></p>
      </div>
      <!-- 3 格局 -->
      <div class="pattern">
        <img src="../assets/images/details/house.jpg" alt="">
        <div class="left">
          <span>独立单间 18m<sup>2</sup></span>
          <span>
            {{info.r_room}}室
            {{info.r_hall}}厅
            {{info.r_toilet}}卫
          </span>
        </div>
        <img src="../assets/images/details/bed.jpg" alt="">
        <div class="right">          
          <span>{{info.r_bed}}张床·宜住{{info.r_people}}人</span>
          <span>折扣：{{info.r_discount}}元/晚</span>
        </div>
      </div>
      <!-- 4 地图位置 -->
      <div class="address">
        <span>{{info.r_address}}</span>
      </div>
      <!-- 5 时间 入住和离开 -->
      <div class="time">
        <van-cell-group>
          <van-cell title="点此选择入住及离开时间" :value="date" @click="show = true" />
          <van-calendar v-model="show" type="range" @confirm="onConfirm" />
          <van-cell :value="`${this.checkIn} 14:00  至  ${this.checkOut} 12:00  共${this.liveCount}晚`" />
        </van-cell-group>
      </div>
      <!-- 6 配套设施 -->
      <div class="facilities">
          <van-cell 
            title="配套设施" 
            is-link 
            arrow-direction="down"
            value="全部设施" 
            @click="facilitiesPopup">   
          </van-cell>
          <van-popup
            v-model="facilities"
            closeable
            position="bottom"
            close-icon="cross"
            :style="{ height:'70%'}">
            <!-- 详细的配套设施 -->
            <div class="new_6">
              <p v-for="(v,k) of 10" :key="k">
                {{v}}
              </p>
            </div>
          </van-popup>
          <!-- 基础设施 -->
          <div class="old_6">
            <span class="facilities_title">基础</span> 
            <van-checkbox-group v-model="result" direction="horizontal" disabled>
              <van-checkbox name="wf">WiFi</van-checkbox>
              <van-checkbox name="dt">电梯</van-checkbox>
              <van-checkbox name="tcw">停车位</van-checkbox>
            </van-checkbox-group>
            
            <span class="facilities_title">洗浴</span>
            <van-checkbox-group v-model="result" direction="horizontal" disabled>
              <van-checkbox name="xy">洗浴</van-checkbox>
              <van-checkbox name="ly">淋浴</van-checkbox>
              <van-checkbox name="dy">独立卫生间</van-checkbox>
            </van-checkbox-group>
            <span class="facilities_title">电器</span>
            <van-checkbox-group v-model="result" direction="horizontal" disabled>
              <van-checkbox name="kt">空调</van-checkbox>
              <van-checkbox name="ds">电视</van-checkbox>
              <van-checkbox name="xyj">洗衣机</van-checkbox>
            </van-checkbox-group>
          </div>
      </div>
      <!-- 7 房东介绍 -->
      <div class="homeowner">
        <van-cell 
            title="房东介绍" 
            is-link 
            arrow-direction="down"
            value="房东主页" 
            @click="homeownerPopup">   
          </van-cell>
          <van-popup
            v-model="homeowner"
            closeable
            position="bottom"
            close-icon="cross"
            :style="{ height:'70%'}">
            <!-- 详细的房东信息 -->
            <div class="new_7">
              <p v-for="(v,k) of 10" :key="k">
                {{v}}
              </p>
            </div>
          </van-popup>
          <!-- 房东信息 -->
          <div class="old_7">
            <img src="" alt="房东头像"> <span class="homeower_name">房东如意会所</span><br>
            <hr>
            <span class="homeower_title">房源介绍</span>
            <span class="homeower_content">
              具体内容：区周边配套成熟，商业非常繁荣，有SM广场、伊藤洋华堂、龙湖三千集店大型综合商场，，红旗超市、舞东风、WOWO和其他小超市十数家，小区商业街有工商银行、建设银行、浙商银行、中国银行等，包括第六人民医院（三甲）、第六省医院及诊所在内医疗机构七八家，出
            </span>
          </div>
      </div>
      <!-- 8 房客点评 -->
      <div class="comment">
        <van-cell 
            title="房客点评" 
            is-link 
            arrow-direction="down"
            value="点评内容" 
            @click="commentPopup">   
          </van-cell>
          <van-popup
            v-model="comment"
            closeable
            position="bottom"
            close-icon="cross"
            :style="{ height:'100%'}">
            <!-- 详细的点评 -->
            <div class="new_8">
              <p v-for="(v,k) of 10" :key="k">
                {{v}}
              </p>
            </div>
          </van-popup>
          <!-- 点评信息 -->
          <div class="old_8">
            <span class="comment_title">大然然</span><br>
            <span class="comment_content">客厅、休闲角、起居室、厨房、上下层2个卫生间的每一寸设计，都为外出旅行的你提供尽可能所需。 【成都土著少女房东】将你出行的每个小细节都妥帖响应，呈现在【墨宿 more homie】的角角落落。 4.9米挑高的矩形落地窗漫射着冬季的旭日暖阳，毫无遮拦地洒进窗内。</span>
          </div>
      </div>
      <!-- 9 预定须知 -->
      <div class="notice">
        <van-cell 
            title="预定须知" 
            is-link 
            arrow-direction="down"
            value="全部规则" 
            @click="noticePopup">   
          </van-cell>
          <van-popup
            v-model="notice"
            closeable
            position="bottom"
            close-icon="cross"
            :style="{ height:'100%'}">
            <!-- 详细的规则 -->
            <div class="new_9">
              <p v-for="(v,k) of 10" :key="k">
                {{v}}
              </p>
            </div>
          </van-popup>
          <!-- 规则须知 写死-->
          <div class="old_9">
            <!-- 规则1 -->
            <span class="notice_title">入住/退订</span>
            <span class="notice_content">入住日14:00后入住 退订日12:00前离开(以当地城市时区为准)</span>
            <br>
            <!-- 规则2 -->
            <span class="notice_title">在线押金</span> 
            <span class="notice_content">不收取押金</span>
            <br>
            <!-- 规则3 -->
            <span class="notice_title">清洁费用</span> 
            <span class="notice_content">不收取清洁费</span>
            <br>
            <!-- 规则4 -->
            <span class="notice_title">房东要求</span> 
            <span class="notice_content">允许做饭,不允许带宠物,不允许聚会,不...</span>
            <br>
          </div>
      </div>
    </div>
    <!-- 10 底部固定  价格及提交订单 -->
    <div class="footer">
      <router-link :to="`/paypage/${info.rid}`">
        <van-submit-bar :price="liveCount ?( info.r_price * liveCount)*100:(info.r_price)*100"  button-text="提交订单"  @submit="onSubmit" />
      </router-link>
    </div>
    
  </div>
</template>
<style>
  

  .details{
    margin: 0;padding: 0;
    width: 100%;
  }
  
  /* 1 轮播图 */
  .details .banner{
    height: 345px;
    width: 100%;
  }
  /* 主体部分样式 */
  .details .main{
    background-color: #fff;
    margin:0 10px;
    border-radius: 15px;
  }
  /* 2 房屋名称 */
  .details .title{
    font-size: 20px;
    background-color: #fff;
    margin-top: 5px;
    padding: 10px 25px 10px;
    border-radius: 10px;
  }
  /* 3 格局 */
  
  .details .pattern{
    background-color: #eee;
    padding: 15px 20px;
    border-radius: 10px;
  }
  .details .pattern .left,.details .pattern .right{
    display:inline-block;
  }
  .details .pattern img{
    margin: 0 5px 10px  40px;
  }
  .details .pattern .left span,.details .pattern .right span{
    display: block;
    font-size: 14px;
    text-align: left;
  }
  .details sup{
    font-size:2px;
  }
  /* 4 地图位置 */
  .details .address{
    height: 100px;
    font-size: 15px;
    text-align: center;
    line-height: 100px;
    background:url(../assets/images/details/1.png) center no-repeat;
    margin-top: 20px;
  }
  /* 5 时间 入住和离开 */
  .details .time{
    background-color: #fff;
    margin: 15px 20px;
    border-radius: 10px; 
    border: 2px solid #ccc;

  }
  /* 下面四项顶部按钮  */
  .van-cell__title{
    font-size: 20px;
    font-weight: 800;
  }
  .van-cell__value{
    font-size: 14px;
  }
  .van-cell,.van-cell--clickable{
    border-radius: 10px;
  }
  /* 通用背景 */
  .details .facilities,.details .homeowner,
  .details .comment,.details .notice{
    margin-top: 15px;
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
  }
  /* 6 配套设施 */
  .details .old_6{
    margin-top: 8px;
    border: 2px solid #ccc;
    border-radius: 15px;
    padding: 10px;
  }
  .details .facilities_title{
    font-size: 16px;
    font-weight: 800;
  }
  /* 7 房东介绍 */
  .details .old_7{
    margin-top: 8px;
    border: 2px solid #ccc;
    border-radius: 15px;
    padding: 10px;
  }
  .details .homeower_name{
    font-size: 18px;
    font-weight: 800;
  }
  .details hr{
    color: #000;
    width: 100%;
    text-align: center;
    margin-bottom: 14px;
  }
  .details .homeower_title{
    font-size: 16px;
    font-weight: 800;
  }
  .details .homeower_content{
    font-size: 16px;
    line-height: 18px;

  }
  /* 8 房客点评 */
  .details .old_8{
    margin-top: 8px;
    border: 2px solid #ccc;
    border-radius: 15px;
    padding: 10px;
  }
  .details .comment_title{
    font-size: 18px;
    font-weight: 800;
    
  }
  .details .comment_content{
    margin-left: 4px;
    font-size: 14px;
    line-height: 16px;

  }
  /* 9 预定须知 */
  .details .old_9{
    margin-top: 8px;
    border: 2px solid #ccc;
    border-radius: 15px;
    padding: 10px;
  }
  .details .notice_title{
    font-size: 14px;
    font-weight: 800;
  }
  .details .notice_content{
    margin-left: 4px;
    font-size: 14px;
    line-height: 20px;

  }

</style>


<script>
export default {
  data(){
    return{
      
      //存储房源详细信息
      info:{},
      // 默认让设施 弹出层隐藏
      facilities: false,
      // 默认让房东 弹出层隐藏
      homeowner:false,
      // 默认让房东 弹出层隐藏
      comment:false,
      // 默认让房东 弹出层隐藏
      notice:false,
      //基础设施
      result: ['dt','tcw','0','dy','ly','kt','ds','xyj','wf'],
      //时间选择显示
      date: '',
      show: false,
      // 入住离开时间：
      checkIn: "",
      checkOut: "",
      // 共居住几晚
      liveCount: "",
      //房子id
      id:"",
      photo:{}
     }
    },
    methods:{
      //控制入住离开时间选择
      formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
      },

      onConfirm(date) {
        const [start, end] = date;
        this.show = false;
        this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        //数据内容
        this.checkIn=this.formatDate(start)
        this.checkOut=this.formatDate(end)
        this.liveCount=( (Date.parse(this.formatDate(end))  -  Date.parse(this.formatDate(start)))/1000/60/60/24 )
        
      },

      // 控制弹出层弹出
      facilitiesPopup() {
        this.facilities = true;
      },
       homeownerPopup() {
        this.homeowner = true;
      },
      commentPopup() {
        this.homeowner = true;
      },
      noticePopup() {
        this.homeowner = true;
      },
      //提交订单事件 
      onSubmit(){
        //条件暂定
        if(this.checkIn && this.checkOut) {
          
          //房子标题 房子价格 房子室厅卫 时间 
          let checkIn=Date.parse(this.checkIn);
          let checkOut=Date.parse(this.checkOut);
          let id=this.id;
          //this.$store.dispatch('push',obj)
          this.$store.commit('checkIn',checkIn)
          this.$store.commit('checkOut',checkOut)
          this.$store.commit('id',id)

          }else{
          //console.log('111')
          }
      }
    },
    mounted(){
        //获取地址栏的id  再向web服务器请求数据
        //1
        let id = this.$route.params.id;
        //console.log(id)
        //2
        this.axios.get('/details?id=' +id).then(res=>{
            let data=res.data.result;
            console.log(data)
            //data.r_photo=require('../assets/img/'+data.r_photo.img1)
            this.info=data;
            
        })
    }
}
</script>
