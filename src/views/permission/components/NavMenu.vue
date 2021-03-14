<template>
  <div class="navMenu">
        <el-menu class="el-menu-vertical-demo"    
         
         :background-color="menuObj.bgColor"
                :collapse="isCollapse"
                :text-color="menuObj.textColor"
                :active-text-color="menuObj.activeTextColor"
                :style="{width:sidebarWidth+'px'}">
          <!-- <template> -->
            <!-- <i :class="item.icon"></i>
              <span>{{ item.name }}</span> -->
            <!-- 表示有一级菜单 -->
            <!-- <router-link to="item.index">
              <el-menu-item  v-for="(item,index) in navList" :key="index" :index="item.index">{{ item.name }}</el-menu-item>
            </router-link> -->
            <!-- 表示有二级菜单 -->
            <!-- <el-submenu
              v-if="item.children && item.children.length >= 0"
              :index="item.index"
              v-for="(item,index) in navList" :key="index"
            >
              <template slot="title">
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item
                :index="item.index"
                v-for="(item, index) in item.children"
                :key="index"
              >
                {{ item.name }}
              </el-menu-item>
            </el-submenu>
          </template> -->
          <!-- <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" v-for="(item, index) in item.children" :key="index">
            {{item}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
        <template v-for="(item,index) in navList">
                <!--表示 有一级菜单-->
                <router-link :to="'/permission/' + item.index"  v-if="!item.children" :key="index + 'A'">
                    <el-menu-item  class="dropItem" 
                        :index="index + 'C'"
                        @click="changeTitle(item.name)"
                        >
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span v-if="item.name" slot="title">{{item.name}}</span> 
                    </el-menu-item>
                </router-link>

                <!--表示 有二级或者多级菜单 -->
                <el-submenu v-if="item.children  && item.children.length >= 1 "  :index="index+'B'" :key="index">
                    <template slot="title">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span v-if="item.name" slot="title">{{ item.name}}</span>
                    </template>
                    <!--直接定位到子路由上，子路由也可以实现导航功能-->
                    <router-link v-for="(citem,cindex) in item.children" :to="item.index + '/' + citem.index"  :key="cindex + ''">
                        <el-menu-item 
                            :index="cindex + ''">
                            <span slot="title"> {{citem.name}}</span>
                        </el-menu-item> 
                    </router-link>
                </el-submenu>
            </template>
</el-menu>
    
  </div>
</template>

<script>
import { getNavList } from "../../../api/home";
  import bus from "../../../utils/bus.js";

export default {
  name: "",
  data() {
    return {
        menuObj:{
         bgColor:'#fff',
         textColor:'#666',
         activeTextColor:'#ff6428',
       },
       isCollapse: false,
       sidebarWidth: 200,
      navList: [
        {
          icon: "el-icon-s-home",
          name: "首页",
          index: "home",
        },
        {
          icon: "el-icon-s-custom",
          name: "用户管理",
          index: "userManager",
        },
        {
          icon: "el-icon-share",
          name: "分享功能",
          index: "share",
        },
        {
          icon: "el-icon-info",
          name: "信息管理",
          index: "infoManage",
          children: [
            {
              name: "个人信息",
              index: "infoShow",
            },
            {
              name: "用户修改",
              index: "infoModify",
            },
          ],
        },
        {
          icon: "el-icon-coin",
          name: "资金管理",
          index: 'fundManage',
          children: [
            {
              name: "资金流水",
              index: "fundList",
            },
            {
              name: "区域投资",
              index: "chinaTabsList",
            },
          ],
        },
        {
          icon: "el-icon-s-data",
          name: "资金数据",
          index: 'fundData',
          children: [
            {
              name: "投资分布",
              index: "fundPosition",
            },
            {
              name: "项目投资",
              index: "typePosition",
            },
            {
              name: "收支分布",
              index: "incomePayPosition",
            },
          ],
        },
        {
          icon: "el-icon-setting",
          name: "权限设置",
            index: 'permission',
          children: [
            {
              name: "页面权限",
              index: "page",
            },
            {
              name: "按钮权限",
              index: "directive",
            },
          ],
        },
        {
          icon: "el-icon-warning",
          name: "错误页面",
          index: "error",
          children: [
            { name: "401", index: "error401" },
            {
              name: "403",
              index: "error403",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getNavList();
    bus.$on('Collapse', content=> {
     this.isCollapse = content;
     if(content) {
       this.sidebarWidth = 35;
     }else {
      this.sidebarWidth = 200;
     }
    })
  },
  methods: {
    getNavList() {
      getNavList().then((res) => {
        console.log(res);
      });
    },
    changeTitle(name) {
      console.log(name);
      document.title = name;
    }
  },
};
</script>

<style lang="scss" scoped>
.navMenu {
  height: calc(100%- 60px);
  background-color: #fff;
  border-top: 3px solid #ccc;
}
</style>
