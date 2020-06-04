<template>
  <div class="login">
    <div class="login-wrap">
      <h2>博客管理后台</h2>
      <p>时光正好，未来可期，加油 ！</p>
      <p>账号密码登录</p>
      <div class="login-input">
        <el-input
          placeholder="admin/user"
          v-model="form.username"
          clearable
          prefix-icon="el-icon-user"
        ></el-input>
      </div>
      <div class="login-input">
        <el-input
          placeholder="password"
          show-password
          clearable
          v-model="form.password"
          prefix-icon="el-icon-lock"
        ></el-input>
      </div>
      <div class="login-checkbox">
        <el-checkbox v-model="form.autoLogin">7天内自动登录</el-checkbox>
      </div>
      <div class="login-btn">
        <el-button type="primary" @click="toLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
interface InfoType {
  username: string | number;
  password: string | number;
  autoLogin: boolean;
}
@Component({
  components: {},
})
export default class Home extends Vue {
  @Action('tologin') public Login;
  @Action public getInfo;
  public form: InfoType = {
    username: '',
    password: '',
    autoLogin: false,
  };
  public async toLogin() {
    if (!this.form.username) { return this.$error('请先填写用户名'); }
    if (!this.form.password) { return this.$error('密码不能为空'); }
    try {
      let res = await this.Login(this.form);
      if (res) {
        localStorage.setItem('my_token', res.token);
        this.$success('登录成功');
        await this.getInfo();
        await this.$router.push('/main');
      }
    } catch (err) {
      this.$error(err);
    }
  }
}
</script>

<style lang="less">
.login {
  min-height: 100vh;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  display: flex;
  align-items: center;
  .login-wrap {
    text-align: center;
    margin: -100px auto 0;
    width: 600px;
    height: 300px;
    h2 {
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      line-height: 1.8;
      & + p {
        margin: 50px auto 0;
        color: @color-t;
        border-bottom: 2px solid @color-t;
        padding-bottom: 10px;
        width: 130px;
      }
    }
    .login-input {
      margin-top: 20px;
      .el-input {
        width: 300px;
      }
      & + .login-input {
        margin-top: 20px;
      }
    }
    .login-checkbox {
      margin: 20px auto 0;
      width: 300px;
      text-align: left;
    }
    .login-btn {
      margin: 20px auto 0;
      width: 300px;
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
