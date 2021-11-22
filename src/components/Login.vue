<template>
  <div class="login_container">
    <div class="login-box">
      <!-- 头像模块 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <!-- model绑定数据  rules绑定验证是否合法
      重置表单首先添加 ref绑定点击重置事件loginFormRef就是实例对象这里相当于form(自定义名称)-->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        
        <!-- 密码-->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <!--ref绑定form表单进行重置 -->
          <el-button type="info" @click="reseLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 登录表单的数据绑定对象
    return {
      loginForm: {
        username: "",
        password: "",
      },
      //表单的验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message: "长度在 8 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 方法名自定义为相关内容的名称
    // 重置Form表单 在函数中写重置内容
    reseLoginForm(){
      this.$refs.loginFormRef.resetFields(); 
      // 通过this访问到$refs然后在表出来引用对象loginForm然后调用resetFields()方法就可以重置表单 琢磨思路。。
      // console.log(this.$refs);
    },    
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //以上属性，元素会以自身的左上角为原点，往上往左分别移动自身长宽的50%，以使其居于中心位置
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>