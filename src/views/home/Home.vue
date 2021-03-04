<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <Title></Title>
        <nav-menu></nav-menu>
      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import Title from './components/Title'

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavMenu,
    Title
  },

};
</script>

<style lang="scss" scope>

</style>
