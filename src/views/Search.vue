<template>
  <div class="search">
      <!-- 顶部固定 返回 -->
      <mt-header title="云南" fixed>
        <!-- 返回按钮 -->
        <span slot="left">
          <mt-button icon="back"></mt-button>
        </span>
        <!-- 更多按钮 待定 -->
        <!-- <div slot="right">
          <mt-button icon="more"></mt-button>
        </div> -->
      </mt-header>
      <!-- 多种选项栏 -->
      
      <!-- 具体房源信息栏 -->
      <div 
        class="main"
        infinite-scroll-distance="20"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-immediate-check="true">
      <!-- 单一的房屋板块 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item :id="active.toString()">
          <!-- 单一房屋板块 链接 -->          
          <div 
            class="article"
            v-for="(article,index) of houses"
            :key="index">

            <router-link to="">
              <!-- 单一房屋图片轮播图 -->
              <div class="banner">
                <mt-swipe 
                  :showIndicators="true"
                  :auto="0"
                  :speed="300">
                  <mt-swipe-item><img src="../assets/images/search/1.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
              </div>
              <!-- 单一房屋信息 -->
              <!-- 单一房屋  名称 描述 价钱 房东信息 -->
              
            </router-link>
        
          </div>
          <!-- 单一文章信息结束 -->

        </mt-tab-container-item>
     </mt-tab-container>
      
      <!-- 如果到底最后页则显示相关的提示信息 -->
      <div class="tips" v-if="page >= pagecount">没有更多房源了</div>
      </div>
      
  </div>
</template>

<style>
.search .banner{
    height: 345px;
  }
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
      //默认被选定的顶部选项卡及面板的ID
      active:'1',
      //默认被选定的顶部选项卡的ID
      tabbar:'index',
      //存储服务器返回的古镇分类信息
      town:[],
      //存储服务器返回的城市分类信息
      city:[],
      //存储服务器返回的房源信息
      houses:[],
      //用于标识当前服务器在正在空闲，可以处理用户滚动行为所触发的滚动方法
      busy:false,
      //标识页码的初始值
      page:1,
      //存储某一分类下房源信息总页数 
      pagecount:0,
      
    }
  },
  methods:{
    
    // 用户注销
    logout(){
      this.$store.commit('logout');
    },
    /**
     * 加载数据的自定义函数,会被mounted、active及loadMore分别进行调用    
     * 
     * @param cid  number,表示房源分类的ID
     * @param page number,表示页码
     * 
     * @return void
     * */
    loadData(cid,page){
      // 显示加载提示框
      this.$indicator.open({
        text:'你的小可爱在加载',
        spinnerType:'snake'
      })
      //此时的真正作用是：现在已经触发了滚动方法,既使现在再次进行
      //滚动范围也不再触发滚动方法了    
      this.busy = true;
      //向服务器发送请求，以获取当前城市分类下的第几页的数据
      //  /search?cid=1&page=1
      this.axios.get('/search?cid=' + cid + '&page=' + page).then(res=>{
        let data = res.data.results;    
        //
        //console.log(this.houses)
        //将服务器返回的总页数赋值给pagecount变量
        this.pagecount = res.data.pagecount;    
        data.forEach(item=>{
          if(item.r_photo != null){
            //图片链接待定！！！！！！！！！！！！
            //item.r_photo = require('../assets/' + item.r_photo);
          }
          this.houses.push(item);
        })
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

    // 获取古镇分类信息
    this.axios.get('/town').then(res=>{
       //接收服务器返回数据并且赋值给属性town
       this.town = res.data.results;
       //town []
       //console.log(this.town)
    });
    // 获取默认古镇分类下的房源数据,本次调用有且只有一次
    this.loadData(this.active,this.page);

    // 获取城市分类信息
    this.axios.get('/city').then(res=>{
       //接收服务器返回数据并且赋值给属性city
       this.city = res.data.results;
       //city []
       //console.log(this.city)
    });
    // 获取默认城市分类下的房源数据,本次调用有且只有一次
    this.loadData(this.active,this.page);
  }
  

}
</script>

