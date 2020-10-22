<template>
  <div class="xx">
    <van-dropdown-menu>
      <!-- 时间下拉菜单 -->
      <van-dropdown-item v-model="value1" :options="option1" />
      <!-- 城市下拉菜单 -->
      <van-dropdown-item v-model="value" :options="option" />
      <!-- 筛选内容下拉菜单 -->
      <van-dropdown-item title="条件筛选" ref="item">

        <van-cell center title="价格区间">
          <template #right-icon>
            <van-progress pivot-text="价格" color="#ee0a24" :percentage="50" />
          </template>
        </van-cell>
        
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

        <van-cell center title="房间出租数量">
          <template #right-icon>
            <van-checkbox-group v-model="result1" direction="horizontal">
              <van-checkbox name="a">单个房间出租</van-checkbox>
              <van-checkbox name="b">整套房间出租</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-cell>

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
</template>

<style>
  .xx{
    margin-top: 50px;
  }
</style>
<script>
export default {
  data() {
    return {
      result1: [],
      result2: [],
      result3: [],
      value: 0,
      value1: 0,
      value2: 0,
      option1: [
        { text: '全部房源', value: 0 },
        { text: '折扣房源', value: 1 },
        //{ text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 0 },
        { text: '价格排序', value: 1 },
        { text: '价格反序', value: 2 },
      ],
      switch1: false,
      switch2: false,
      switch3:[],
      option: [
        { text: '云南', value: 0 },
        { text: '大理', value: 1 },
        { text: '丽江', value: 2 },
        { text: '昆明', value: 2 },
        { text: '西双版纳', value: 2 },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>