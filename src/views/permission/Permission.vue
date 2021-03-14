<template>
  <div id="home">
    <el-container>
      <el-container>
        <el-aside width="">
          <Title></Title>
          <nav-menu></nav-menu>
        </el-aside>
        <el-main>
          <top-tiitle></top-tiitle>
          <title-name></title-name>
          <router-view></router-view>
        </el-main>  
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import Title from "./components/Title";
import TitleName from './components/TitleName.vue';
import TopTiitle from "./components/TopTiitle";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavMenu,
    Title,
    TopTiitle,
    TitleName,
  },
};
</script>

<style lang="scss" scoped>
.el-main{
  padding: 0;
}
#home {
  height: 100vh;
}
.el-aside {
  background-color: #fff;
}

</style>
