<template>
  <div class="item">
    <div class="title">{{ data.title }}</div>
    <div class="people">
      <span class="number">{{ data.number }}</span>
      <span class="unit">{{ data.unit }}</span> 
    </div>
     <div class="decreased">decreased by{{data.decreased}}</div>
    <svg class="icon " aria-hidden="true">
      <use :xlink:href="data.icon"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'InvestorItem',
  props: {
     data: {
        title: "年度盈亏",
        number: 68,
        unit: "(千万元)",
        decreased: '',
        icon: ""
      },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.icon { 
  position: absolute;
  top: 14%;
  right: 0;
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.item {
  position: relative;
  width: 50%;
  height: 70px;
  padding: 15px 10px;
  color: #fff;
  background-color: #ffa3a1;
  border-radius: 10px;
  font-style: normal;
  
  .title {
    font-size: 14px;
    // margin-bottom: 10px;
  }
  .unit {
    font-size: 14px;
    font-weight: 500;
  }
  .people {
    height: 35px;
    line-height: 35px;
    font-size: 22px;
    font-weight: 700;
  }
}
</style>