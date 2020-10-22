<template>
    <div class="home">
        <!-- 顶部轮播图开始 -->
        <div class="mtSwipe">   
            <mt-swipe :auto='5000' :show-indicators = 'false'>
                <mt-swipe-item>
                    <router-link to="paypage">
                        <img src="../assets/img/2-3.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
                <mt-swipe-item>
                    <router-link to="orderlist">
                        <img src="../assets/img/r1-2.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
                <mt-swipe-item>
                    <router-link to="paypage">
                        <img src="../assets/img/4-1.jpg" alt="">
                    </router-link>-
                </mt-swipe-item>
                <mt-swipe-item>
                    <router-link to="paypage">
                       <img src="../assets/img/4-5.jpg" alt="">
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
            <van-grid clickable :column-num="4">
                <van-grid-item icon="point-gift-o" text="首单立减" to="/search" />
                <van-grid-item icon="gem-o" text="会员折扣" to="/search" />
                <van-grid-item icon="friends-o" text="朋友Happy" to="/search" />
                <van-grid-item icon="like-o" text="情侣约会" to="/search" />
            </van-grid>
        </div>
        <!-- 推荐 -->
        <div class="recommend" >
            <div>
                <div>
                    <img src="../assets/img/2-3.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>露天四合院</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="../assets/img/r1-2.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>迪士尼大露台多擦收到收到阿萨德傲视</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="../assets/img/4-1.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>迪士尼大露台多擦收到收到阿萨德傲视</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="../assets/img/4-5.jpg" alt="">
                </div>
                <div>
                    <p>￥100<span>可住2人</span> </p>
                    <p>迪士尼大露台多擦收到收到阿萨德傲视</p>
                </div>
            </div>
        </div>
        <div class="safe">
            <p>乐途保障</p>
            <p>蚂蚁花呗 · 乐途商旅 · 乐途免押 · 乐途保险</p>
            <div class="four">
                <div>
                    <img src="../assets/icon/mayihuabei.png" alt="">
                    <p>蚂蚁花呗</p>
                </div>
                <div>
                    <img src="../assets/icon/package.png" alt="">
                    <p>乐途商旅</p>
                </div>
                <div>
                    <img src="../assets/icon/mianyajin.png" alt="">
                    <p>乐途免押</p>
                </div>
                <div>
                    <img src="../assets/icon/baoxian.png" alt="">
                    <p>乐途保险</p>
                </div>
                
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
    /* 主页样式 */
    .home{
        font-size: 1.25rem;
        position: relative;
    }

    /* 轮播图样式 */
    .mtSwipe{
        width: 100%;
        height: 13.5rem;
    }
    .mtSwipe img{
        width: 100%;

    }

    /* 搜素导航栏样式 */
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
        border: 3px solid #aa5;
        border-right-style: none;
        padding: 0.15rem 1rem;
    }
    .nav button{
        width: 30%;
        border: 3px solid #aa5;
        background-image: linear-gradient(to bottom right, #aa5 , #ca8);
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        font-size:1rem ;
    }
    .grid{
        margin: 1.5rem;
    }

    /* 乐途首页内容样式 */
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
        margin-bottom: 0.75rem;
        /* background: #dddddd; */
        border-top-left-radius: .75rem;
        border-top-right-radius: .75rem;
    }
    .recommend>div:nth-child(odd){
        margin-right: 4%;
    }
    .recommend>div img{
          width: 100%;
          height: 28vw;
    }
    .recommend div p:last-child{
        font-size: 0.8rem;
        color: #666;
    }
    .recommend>div>div:first-child{
        border-radius: 0.75rem;
        overflow: hidden;
    }
    .recommend p {
        font-size: 1rem;
        margin: 0.5rem 1rem 0 0.5rem;
        line-height: 1.25rem;
        max-height: 2.5rem;
        overflow: hidden;
    }
    .recommend p>span{
        margin-left:2rem;
        color: #666; 
        font-size: 0.8rem;
    }

    /* 乐途保障标题样式 */
    .safe{
        width: 90%;
        margin: 0 auto;
        font-size: 0.8rem;
    }
    .safe p{
        text-align: center;
        margin-bottom: 1rem;
        font-weight: 700;
    }
     .safe p:first-child{
         font-size: 1rem;
     }

    /* 乐途保障图片样式 */
    .four{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 4rem;
    }
    .four>div{
        width: 47%;
        display: flex;
        flex-direction: column;
        border-radius: 0.75rem;
        background: #f6f6f6;
        margin-bottom: 2vw;
        box-sizing: border-box;
        padding: 1rem;
    }
    .four>div img{
        width: 60%;
        margin: 0 auto;
    }
    .four>div p{
        font-size: 1rem;
        margin: 1rem 0 0;   
    }
</style>
<script>
export default {
    data(){
        return{
            
            };
    },
    watch:{
        //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
    },
    methods: {
        // button(){
        //     this.$router.push('/search');
        // }
    }

}
</script>
