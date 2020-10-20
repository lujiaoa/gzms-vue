<template>
    <div id="my_footer">
        <mt-tabbar v-model="tabbar" fixed>
            <mt-tab-item id="index">
                首页
                <!-- //199E34 -->
                <!-- //707070 --> 
                <img src="..\assets\footer-images\index_enabled.png" slot="icon" v-if="tabbar=='index'" >
                <img src="..\assets\footer-images\index_disabled.png" slot="icon"  v-else alt="">
            </mt-tab-item>
            <mt-tab-item id="collect">
                收藏
                <img src="..\assets\footer-images\collect_enabled.png" slot="icon" v-if="tabbar=='collect'" alt="">
                <img src="..\assets\footer-images\collect_disabled.png" slot="icon" v-else alt="">
            </mt-tab-item>
            <mt-tab-item id="message">
                消息
                <img src="..\assets\footer-images\message_enabled.png" slot="icon" v-if="tabbar=='message'" alt="">
                <img src="..\assets\footer-images\message_disabled.png" slot="icon" v-else alt="">
            </mt-tab-item>
            <mt-tab-item id="me" class="MyFontStyle">
                我的
                <img src="..\assets\footer-images\me_enabled.png" slot="icon" v-if="tabbar=='me'" alt="">
                <img src="..\assets\footer-images\me_disabled.png" slot="icon" v-else alt="">
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style scoped>
    .MyFontStyle{
        color: #707070;
    }
    .mint-tabbar>.is-selected{
        color:#199E34 ;
    }
    .mint-tabbar>.mint-tab-item{
         font-size: ;
    }
</style>
<script>
export default {
    data(){
        return{
            tabbar:'me'
        }
    }
}
</script>