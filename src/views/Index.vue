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
            <div>
                <div>
                    <img src="../assets/home-images/top.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>迪士尼大露台多擦收到收到阿萨德傲视</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="../assets/home-images/123.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>迪士尼大露台多擦收到收到阿萨德傲视</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="../assets/home-images/top.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>迪士尼大露台多擦收到收到阿萨德傲视</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="../assets/home-images/top.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>迪士尼大露台多擦收到收到阿萨德傲视</p>
                </div>
            </div>
        </div>
        <div>

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
        background-color: #FAFEFA;
        margin: 0 auto ;
        left: 5%;
        display: flex;
        flex-wrap: wrap;
    }
    .recommend>div {
        width: 48%;

        margin-bottom: 1rem;
        /* background: #dddddd; */
        border-top-left-radius: .75rem;
        border-top-right-radius: .75rem;
    }
    .recommend>div:nth-child(odd){
        margin-right: 4%;
    }
    .recommend>div img{
          width: 100%;
    }
    .recommend>div>div:first-child{
        border-radius: 0.75rem;
        overflow: hidden;
    }
    .recommend p {
        font-size: 1rem;
        margin: 0.75rem 1.5rem 0 0.5rem;
        line-height: 1.25rem;
    }
    .recommend p>span{
        margin-left:2rem;
        color: #666; 
        font-size: 0.8rem;
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

