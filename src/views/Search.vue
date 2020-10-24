<template>
  <div class="search">
      <!-- 顶部固定 返回 -->
      <mt-header title="云南" fixed>
        <!-- 返回按钮 -->
        <span slot="left">
          <router-link to="/">
            <mt-button icon="back"></mt-button>
          </router-link>
        </span>
      </mt-header>
      <!-- 多种选项栏 -->
      <div class="top">
        <van-dropdown-menu>
          <!-- 时间下拉菜单 功能没有-->
          <van-dropdown-item v-model="value1" :options="option1" />
          <!-- 城市下拉菜单 -->
          <van-dropdown-item v-model="value" :options="option" />
          <!-- 筛选内容下拉菜单  功能没有-->
          <van-dropdown-item title="条件筛选" ref="item">
            <!-- 价格筛选  待定 -->
            <!-- <van-cell center title="价格区间">
              <template #right-icon>
                <van-progress pivot-text="价格" color="#ee0a24" :percentage="50" />
              </template>
            </van-cell> -->
            <!-- 设施筛选 -->
            <van-cell center title="独立卫生间">
              <template #right-icon>
                <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
              </template>
            </van-cell>
            <van-cell center title="共用卫生间">
              <template #right-icon>
                <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
              </template>
            </van-cell>
            <!-- 出租数量  待定 -->
            <!-- <van-cell center title="房间出租数量">
              <template #right-icon>
                <van-checkbox-group v-model="result1" direction="horizontal">
                  <van-checkbox name="a">单个房间出租</van-checkbox>
                  <van-checkbox name="b">整套房间出租</van-checkbox>
                </van-checkbox-group>
              </template>
            </van-cell> -->
            <!-- 入住人数 -->
            <van-cell center title="入住人数">
              <template #right-icon>
                <van-radio-group v-model="result2" direction="horizontal">
                  <van-radio name="a">1人</van-radio>
                  <van-radio name="b">2人</van-radio>
                  <van-radio name="c">3人</van-radio>
                  <van-radio name="d">3人以上</van-radio>
                </van-radio-group>
              </template>
            </van-cell>
            <!-- 床 -->
            <van-cell center title="房间床型">
              <template #right-icon>
                <van-radio-group v-model="result3" direction="horizontal">
                  <van-radio name="a">单人床</van-radio>
                  <van-radio name="b">双人床</van-radio>
                  <van-radio name="c">其他</van-radio>
                </van-radio-group>
              </template>
            </van-cell>
            

            <div style="padding: 5px 16px;">
              <van-button type="danger" block round @click="onConfirm">
                确认
              </van-button>
            </div>

          </van-dropdown-item>
          <!-- 排序方式下拉菜单 -->
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>
      <!-- 具体房源信息栏 -->
      <div 
        class="main"
        infinite-scroll-distance="20"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-immediate-check="true" >
        <!-- 单一的房屋板块 -->
        <div class="house" v-for="(house,index) of allresult" :key="index">
          <router-link :to="`/details/${house.rid}`" class="link">
              <!-- 单一房屋图片轮播图 -->
                <!-- 单一房屋图片 -->
                <img src="../assets/img/r1-1.jpg" alt="">
                <!-- 单一房屋  名称 描述 价钱 房东信息 -->
                <div class="content">
                  <span class="r_title">{{house.r_title}}</span><br>
                  <span class="r_other">整套·{{house.r_bed}}张床·可住{{house.r_people}}人</span><br>
                  <span class="r_price">¥{{house.r_price}}</span><span class="r_other">/晚</span>
                </div>
            </router-link>
        </div>
        <!-- 空的内容 -->
        <!-- <van-empty description="暂时没有收录该地点" /> -->
      
      <!-- 如果到底最后页则显示相关的提示信息 -->
      <div class="tips" v-if="page >= pagecount">没有更多房源了</div>
      </div>
      
  </div>
</template>

<style>
  /* 界面内边距 */
  .search body{
    padding: 15px;
  }
  /*轮播图高度 */
  .search .banner{
      height: 345px;
  }
  
  /* 导航栏样式 */
  .search .top{
    margin-top: 50px;
    text-decoration: none;
  }
  /*房源模块样式 */
  .search .main{
    width: 100%;
    margin: 20px 15px;
  }
  .search .main .house{
    border: 1px solid springgreen;
    margin: 5px 0;
    border-radius: 15px;
  }
  /* 图片格式 */
  .search img{
    width: 100%;
    margin-bottom: 15px;
    margin-top: 25px;
    padding-top: 10px;
    border-top:2px solid #ccc;
  }
  /*字体样式  标题  介绍  价钱*/
  .search .r_title{
    font-size: 20px;
    font-weight: 700;
    color: black;
    margin-left:10px;
    line-height:32px ;
  }
  .search .r_other{
    font-size: 14px;
    color: black;
    line-height: 20px;
    margin-left:10px
  }
  .search .r_price{
    margin-left: 65%;
    font-size: 22px;
    font-weight: 800;
    color: #f05b72;

  }

  /* 底部提示栏 */
  .search .tips{
    padding:15px;
    text-align: center;
    background-color:#f5f5f5;
    color:#333;
  }
</style>


<script>
export default {
  data(){
    return {
      //页面传参集合
      info:{},
      //对于old_town的动态实现
      textArr:[],
      valueArr:[],
      value: 0,
      option:[
        { text: '城市选择', value: 0 },
      ],

      //123分别是  房屋数量 入住人数  床型 的双向绑定
      result1: [],
      result2: [],
      result3: [],

      value1: 0,
      option1: [
        { text: '全部房源', value: 0 },
        { text: '折扣房源', value: 1 },
        //{ text: '活动商品', value: 2 },
      ],

      value2: 0,
      option2: [
        { text: '默认排序', value: 0 },
        { text: '价格排序', value: 1 },
      ],

      switch1: false,
      switch2: false,
      switch3:[],
      
      //默认被选定的顶部选项卡及面板的ID
      active:'1',
      //默认被选定的顶部选项卡的ID
      tabbar:'index',
      //存储服务器返回的古镇分类信息
      town:[],
      //存储服务器返回的城市分类信息
      city:[],
      //存储服务器返回的房源信息
      allresult:[],
      //用于标识当前服务器在正在空闲，可以处理用户滚动行为所触发的滚动方法
      busy:false,
      //标识页码的初始值
      page:1,
      //存储某一分类下房源信息总页数 
      pagecount:0,
      
    }
  },
  methods:{
    onConfirm() {
      this.$refs.item.toggle();
    },
    /**
     * 加载数据的自定义函数,会被mounted、active及loadMore分别进行调用    
     * 
     * @param rid  number,表示房源分类的ID
     * @param page number,表示页码
     * 
     * @return void
     * */
    loadData(rid,page){
      // 显示加载提示框
      this.$indicator.open({
        text:'加载中',
        spinnerType:'snake'
      })
      //此时的真正作用是：现在已经触发了滚动方法,既使现在再次进行
      //滚动范围也不再触发滚动方法了    
      this.busy = true;
      //向服务器发送请求，以获取当前城市分类下的第几页的数据
      //  /search?cid=1&page=1
      this.axios.get('/search?rid=' + rid + '&page=' + page).then(res=>{
        let data = res.data.results;    
        this.allresult=data
        
        //将服务器返回的总页数赋值给pagecount变量
        this.pagecount = res.data.pagecount;  
        //console.log(data)
        
        
        //真正的作用是：上一次的请求已经处理完成了
        //如果现在再次进行滚动范围，则仍然要触发滚动方法
        this.busy = false;
        //关闭加载提示框
        this.$indicator.close();
      });
    },
    //滚动到指定距离范围内时加载更多的服务器数据
    loadMore(){
        //页码进行累加
        this.page++;
        if(this.page<=this.pagecount){
          this.loadData(this.active,this.page);
        }
    }
  },
  watch:{
    //监听顶部选项卡
    active(){
      //清除之前可保存的文章数据
      this.houses= [];

      //保证切换选项卡后要显示当前分类的第1页的数据
      this.page = 1;
      this.loadData(this.active,this.page);
    },
    //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
    tabbar(value){
      if(value == 'index'){
        this.$router.push('/').catch(e=>{});
      }
      if(value == 'me'){
        this.$router.push('/me').catch(e=>{});
      }
    }
  },
  mounted(){
    //获取地址栏的id  再向web服务器请求数据
        //1
        let id = this.$route.params.id;
        //2
        this.axios.get('/searchall?id=' + id).then(res=>{
            let data=res.data.allresult;
            //data.avatar=require('../assets/avatar/'+data.avatar);
            this.info=data;
            //console.log(this.info)
            //对古镇及tid循环
            for(let itemtown of this.info){
              //console.log(item)
              this.textArr.push(itemtown.old_town)
              //this.tidArr.push(itemtown.tid)
            }
            //将数据存入到 option 中
            for(let i = 0; i< this.info.length; i ++){
              this.option[i] = {}; //创建一个新对象
              this.option[i].text = this.textArr[i]; 
              this.option[i].value = i; 
            } 
            //console.log(this.option)
            //this.loadData(this.active,this.page);
        })

    // 获取古镇分类信息
    this.axios.get('/town').then(res=>{
       //接收服务器返回数据并且赋值给属性town
       this.town = res.data.townresults;
       //town []
       //console.log(this.town)
    });
    // 获取默认古镇分类下的房源数据,本次调用有且只有一次
    this.loadData(this.active,this.page);

    // 获取城市分类信息
    this.axios.get('/city').then(res=>{
       //接收服务器返回数据并且赋值给属性city
       this.city = res.data.cityresults;
       //city []
       //console.log(this.city)
    });
    // 获取默认城市分类下的房源数据,本次调用有且只有一次
    this.loadData(this.active,this.page);
  }
  

}
</script>

