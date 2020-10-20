<template>
  <div>
    <mt-header title="古镇民宿" class="paysuccess-header"></mt-header>
    <div class="paysuccess-content">
        <img src="..\assets\PaySuccess-images\Paysuccess.png" class='paysuccess-iamge' alt="">
        <p class="paysuccess-text">支付成功</p>
        <div class="paysuccess-btn">
            <router-link to='/me' class="paysuccess-btn-order">查看订单</router-link  >
            <router-link to='/' class="paysuccess-btn-index">返回首页</router-link>
        </div>
        <img src="..\assets\img\1-1.png" class="advertising" alt="">
    </div>
    
  </div>
</template>
<style scoped>
    .paysuccess-header{
        background-image:  linear-gradient(to bottom, #29c86f,#28c76f ); ;
    }
    .paysuccess-iamge{
        width: 70x;
        height: 70px;
    }
    .paysuccess-text{
        margin-top: 15px;
    }
    .paysuccess-content{
        width: 100%;
        text-align: center;
        /* background-color: aqua; */
        margin-top: 80px;
        padding: 0px 10px;
    }
    .paysuccess-btn{
        width: 60%;
        margin: 0 auto;
        padding-top:90px;
    }
    .paysuccess-btn-order,.paysuccess-btn-index{
        width: 100px;
        height: 32px;
        border: 4px solid #28c76f;
        border-radius: 20px;
        line-height: 1.9;
        font-weight: bold;
        color: black;
    }
    .paysuccess-btn-order{
        display: block;
        float: left;
    }
    .paysuccess-btn-index{
        display: block;
        float: right;
        background-color:#28c76f;
        color: white;
    }
    .advertising{
        height: 250px;
        margin-top: 60px;
    }
</style>