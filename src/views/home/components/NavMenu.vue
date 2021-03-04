<template>
  <div class="navMenu">
    <el-row class="tac">
  <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    >
      <el-submenu :index="index + ''" v-for="(item,index) in navList" :key="index">
         <!-- <el-submenu index="1-4"> -->
          <el-menu-item v-if="item.children == undefined">
             <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item> 
          <template slot="title" v-else> 
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
         
          <el-menu-item index="1-1" v-for="(item, index) in item.children" :key="index">
            {{item}}
          </el-menu-item>    
            </el-submenu> 
        <!-- <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" v-for="(item, index) in item.children" :key="index">
            {{item}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </el-col>
    </el-row>
  </div>
</template>

<script>
import { getNavList } from "../../../api/home";
export default {
  name: "",
  data() {
    return {
      navList: [
        {
          icon: "el-icon-s-home",
          name: "首页",
        },
        {
          icon: "el-icon-s-custom",
          name: "用户管理",
        },
        {
          icon: "el-icon-share",
          name: "分享功能",
        },
        {
          icon: "el-icon-info",
          name: "信息管理",
          children: ["个人信息", "用户修改"],
        },
        {
          icon: "el-icon-coin",
          name: "资金管理",
          children: ["资金流水", "区域投资"],
        },
        {
          icon: "el-icon-s-data",
          name: "资金数据",
          children: ["资金流水", "区域投资"],
        },
        {
          icon: "el-icon-setting",
          name: "权限设置",
          children: ["页面权限", "按钮权限"],
        },
        {
          icon: "el-icon-warning",
          name: "错误页面",
        },
      ],
    };
  },
  mounted() {
    this.getNavList();
  },
  methods: {
    getNavList() {
      console.log(this.navList[0].children);
      getNavList().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="scss" scope>
</style>
