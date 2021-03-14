<template>
  <div class="item">
    <div class="title">{{ data.title }}</div>
    <div>
      <span class="number">{{ data.number }}</span>
      <span class="unit">{{ data.unit }}</span>
    </div>
    <svg class="icon " aria-hidden="true">
      <use :xlink:href="data.icon"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
     data: {
        title: "",
        number: '',
        unit: "",
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
    margin-bottom: 30px;
  }
  .number {
    font-size: 22px;
    font-weight: 700;
  }
  .unit {
    font-size: 14px;
    font-weight: 500;
  }
}
</style>