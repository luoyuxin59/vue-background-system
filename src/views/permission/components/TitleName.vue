<template>
  <div class="titleName">
    <i :class="icon"  @click="Collapse"></i>
  </div>
</template>

<script>
  import bus from "../../../utils/bus.js";
export default {

  name: '',
  data() {
    return {
      icon: 'el-icon-s-fold',
      isCollapse: false
    };
  },
  methods: {
    Collapse() {
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse) {
        this.icon = 'el-icon-s-unfold'
      }else {
          this.icon = 'el-icon-s-fold'
      }
      bus.$emit('Collapse',this.isCollapse)
    }
  },
};
</script>

<style lang="scss" scope>
.titleName {
  height: 30px;
  background-color: #eaebec;
}
.titleName .icon {
  margin: 5px;
  font-size: 20px;
}
</style>
