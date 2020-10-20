<template>
    <div class="home">
        <!-- 顶部轮播图开始 -->
        <div class="mtSwipe">   
            <mt-swipe :auto='5000' :show-indicators = 'false'>
                <mt-swipe-item>
                    <router-link to="paypage">
                        <img src="../assets/home-images/top.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
                <mt-swipe-item>
                    <router-link to="orderlist">
                        <img src="../assets/home-images/top.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
                <mt-swipe-item>
                    <router-link to="paypage">
                        <img src="../assets/home-images/top.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
                <mt-swipe-item>
                    <router-link to="paypage">
                       <img src="../assets/home-images/top.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>  
        <!-- 顶部轮播图结束 -->

        <!-- 顶部搜索开始 -->
        <div class="nav">
            <!-- 导航 -->
            <input type="text" placeholder="省/市/古镇">
            <button id="search_btn" ><img src="../assets/icon/search.png" alt="" >搜索</button>
        </div>
        <!-- 顶部搜索结束 -->

        <!-- 页面内容开始 -->
        <!-- 宫格    -->
        <div class="grid">
            <van-grid :column-num="4">
                <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </div>
        <!-- 推荐 -->
        <div class="recommend" >
            <div v-for="(one,value) of actrcle" :key="value">
            
            </div>
        </div>
        <!-- 页面内容结束 -->

        <!-- 底部选项卡开始 -->
            <div>
                <my-footer></my-footer>
            </div>
        <!-- 底部选项卡结束 -->
    </div>
</template>
<style>
    .recommend{
        width: 90%;
        height: 30prem;
        background-color: #EEE;
        margin:  0 auto ;
        left: 5%;
        display: flex;
    }
    .recommend>div{
        width: 47%;
        height: 8rem;
        background: #09aE24;
        border-radius: .75rem;
    }
    .recommend>div:first{
        margin-left:6%; 
    }
    .home{
        font-size: 1.25rem;
        position: relative;
    }
    .mtSwipe{
        width: 100%;
        height: 13.5rem;
    }
    .mtSwipe img{
        width: 100%
        
    }
    .nav{
        width: 90%;
        height: 3rem;
        background-color: #EEE;
        margin:  -1.75rem auto ;
        left: 5%;
        border-radius:0.75rem; 
        position: absolute;
        z-index: 999;
        display: flex;
    }
    .nav input{
        box-sizing: border-box;
        width: 70%;
        height: 100%;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border: 3px solid #199E34;
        border-right-style: none;
        padding: 0.15rem 1rem;
    }
    .nav button{
        width: 30%;
        border: 3px solid #199E34;
        background-image: linear-gradient(to bottom right, #199E34 , #09aE24);
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        font-size:1rem ;
    }
    /* .nav button:click{
        background-image: linear-gradient(to left top, #aa6 , #cc0);
    } */
    .grid{
        margin: 1.5rem;
    }
</style>
<script>
export default {
    data(){
        return{
            tabbar:'index',
            actrcle:[]
        };
    },
    watch:{
    //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
   
    methods: {

    }
}
}
</script>
<script>

</script>

