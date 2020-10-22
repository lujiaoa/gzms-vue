<template>
    <div>
        <div class="notfound-content">
            <img src="..\assets\notfound-images\404-1.png" class="notfoundimage" alt="">
            <div class="notfound-text">找不到页面~~</div>
            <router-link class="notfound-btn" to='/'>返回主页</router-link>
        </div>
                <div @click="add()"></div>
    </div>
</template>
<style scoped>
    div{
        text-align: center;
    }
    .notfound-content{
        margin-top:100px;
    }
    .notfoundimage{
        width: 60%;
        display: block;
        margin: 0px auto;
    }
    .notfound-text{
        margin-top: 10px;
    }
    .notfound-btn{
        display: inline-block;
        padding: 10px 20px;
        border: 3px solid #aa5;
        border-radius: 20px;
        color: #aa5;
        font-weight: bolder;
        margin-top: 50px;
    }
</style>
<script>
export default {
    methods: {
        add(){
            this.$router.push({path:'/'})
        }
    },
}
</script>