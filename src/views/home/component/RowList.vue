<template>
  <el-row class="row-list">
    <el-col :span="8" class="money left">
      <moneny-item class="item1" :data="data1"></moneny-item>
      <moneny-item class="item2" :data="data2"></moneny-item>
    </el-col>
    <el-col :span="16" class="investor left">
      <investor-item class="item3" :data="data3"></investor-item>
      <investor-item class="item4" :data="data3"></investor-item>
      <investor-item class="item5" :data="data3"></investor-item>
      <investor-item class="item6" :data="data3"></investor-item>
    </el-col>
  </el-row>
</template>

<script>
import MonenyItem from './MonenyItem.vue';
import InvestorItem from './InvestorItem.vue';

export default {
  components: { 
    MonenyItem,
    InvestorItem
  },
  name: 'RowList',
  data() {
    return {
       data1: {
        title: "年度盈亏",
        number: 68,
        unit: "(千万元)",
        icon: "#iconnb-"
      },
      data2: {
        title: "年度收益率",
        number: 120,
        unit: "%",
        icon: "#iconqiandai"
        },
      data3: {
        title: "潜在投资人",
        number: 686,
        unit: "(人)",
        decreased: '10%',
        icon: "#iconqiandai"
        },
      };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.row-list {
  display: flex;
  justify-content: space-between;
  .money {
    display: flex;
    justify-content: space-between;
    height: 100px;
    margin-right: 10px;
    border-radius: 10px;
    .item2 {
      margin-left: 10px;
      background-color: #84d9d2;
    
    }
  }
  .investor {
    display: flex;
    height: 100px;
    border-radius: 10px;
    .item3 {
      background-color: #87DE75;
    }
    .item4 {
      margin: 0 10px;
      background-color: #a5e7f0;
    }
    .item5 {
      background-color: #93b7e3;
      margin-right: 10px;
    }
    .item6 {
      background-color: #edafda;
    }
  }
}
</style>
