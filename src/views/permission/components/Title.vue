<template>
    <div class="title" :style="{width:show.width}">
      <img src="@/assets/img/logo.png" alt="logo">
      <span class="text" :style="{display:show.display}">luoyuxin~~~</span>
    </div>
</template>

<script>
import bus from '../../../utils/bus.js'
export default {
  name: '',
  data() {
    return {
      show: {
        display: 'inner-block',
        width: '',
      }
    };
  },
  mounted() {
    this.isShow()
  },
  methods: {
    isShow() {
      bus.$on('Collapse', content=> {
        if(content) {
          this.show.display = 'none';
          this.show.width = '56px';
        }else {
          this.show.display = 'inner-block';
          this.show.width = '217px';
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped >

    .title {
      width: 216px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      vertical-align: middle;
      font-size: 18px;
      font-weight: 700;
      color: #ff6c60;
      border-right: 1px solid  #e6e6e6;

      img {
        margin-right: 20px;
        width: 30px;
        height: 30px;
        vertical-align: middle;  
      }
    } 

</style>
