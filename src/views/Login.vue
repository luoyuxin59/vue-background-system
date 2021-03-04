<template>
  <div class="login">
    <!-- <transition name="el-fade-in-linear"> -->
    <div class="box">
      <div class="title">luoyuxin</div>
      <el-form
        :model="userInfo"
        ref="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="username">
          <i class="icon el-icon-user"></i>
          <el-input v-model="userInfo.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <i class="icon el-icon-lock"></i>
          <el-input
            v-model="userInfo.password"
            placeholder="密码"
            type="password"
            ><i class="el-icon-user"></i
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button class="singIn" @click="login">SIGN IN</el-button>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
  import { login } from "../api//user.js";
export default {
  name: "Login",
  data() {
    return {
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
      userInfo: {
        username: "admin",
        password: "123456",
      },
    };
  },
  created() {
    let that = this;
    document.onkeypress = function (e) {
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13) {
        that.login(); // 登录方法名
        return false;
      }
    };
  },
  methods: {
    login() {
      login(this.userInfo).then(res => {
       if(res.code == 200 ) {
         this.$message.success('登陆成功')
         this.$router.push('/home')
       }
      })
    }
  },
};
</script>

<style lang="scss" >
.login {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: url(../assets/img/bg9.jpg) no-repeat center center;
  background-size: 100% 100%;
  .box {
    width: 380px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 5px;
    padding: 0 20px;
    transform: translate(-50%, -50%);
    background: #fff;
    /deep/ .el-form {
      margin-top: 40px;
      .el-input__inner {
        padding-left: 35px;
      }
    }
    .icon {
      position: absolute;
      top: 13px;
      left: 15px;
      z-index: 20;
    }

    .title {
      padding-top: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      color: #ff6c60;
    }
    .singIn {
      background-color: orange;
      width: 100%;
      color: #fff;
      font-size: 18px;
    }
  }
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.login /deep/ .el-form {
  margin: 0 auto;
}
</style>
