<template>
  <div class="TopTiitle">
    <div class="right">
      <a
        href="https://github.com/wdlhao/vue2-element-touzi-admin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconlogo_github"></use></svg
      ></a>
      <li>
        <svg class="icon qq" aria-hidden="true">
          <use xlink:href="#iconQQ"></use>
        </svg>
        <img class="qqImg" src="../../../assets/img/qq.png" alt="" />
      </li>
      <li>
        <svg class="icon weixin" aria-hidden="true">
          <use xlink:href="#iconweixin"></use>
        </svg>
        <img class="weixinImg" src="../../../assets//img//wechat.jpg" alt="">
      </li>
      <li>
        <svg class="icon china" aria-hidden="true">
          <use xlink:href="#iconzhongguo"></use>
        </svg>
      </li>
      <div class="user right">
        你好,
        <span class="name">{{ name }}</span>
        <img
          class="headImg"
          src="https://wx.qlogo.cn/mmopen/vi_32/un2HbJJc6eiaviaibvMgiasFNlVDlNOb9E6WCpCrsO4wMMhHIbsvTkAbIehLwROVFlu8dLMcg00t3ZtOcgCCdcxlZA/132"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/iconfont/iconfont";
export default {
  name: "TopTiitle",
  data() {
    return {
      name: "管理员",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scope>
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin: 20px;
  cursor: pointer;
}
.TopTiitle {
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
}
.TopTiitle .right {
  display: flex;
}
.user {
  line-height: 60px;
  font-size: 13px;
}
.user .name {
  color: #a9d86e;
  font-weight: bolder;
  vertical-align: middle;
}
.headImg {
  width: 30px;
  height: 30px;
  margin: 12px 20px 0 20px;
  border-radius: 50%;
  vertical-align: middle;
}
.qq:hover ~ .qqImg  {
    display: block;
}
.weixin:hover ~ .weixinImg  {
    display: block;
}
.weixinImg, .qqImg{
  display: none;
  position: absolute;
  top: 60px;

  width: 80px;
  height: 80px;
}
.weixinImg {
    right: 185px;
}
.qqImg {
  right: 255px;
}
</style>
