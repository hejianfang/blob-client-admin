<template>
  <div id="app">
    <nav>
      <router-view />
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Route } from 'vue-router';
@Component({
  components: {},
})
export default class App extends Vue {
  @Action public isLogin;
  @Action public getInfo;
  public isOrLogin: boolean = false;
  public created() {
    this.init();
  }
  public async init() {
    try {
      this.isOrLogin = await this.isLogin();
      if (!this.isOrLogin) {
        this.toLogin();
      } else {
        await this.getInfo();
      }
    } catch (err) {
      this.$error(err);
      this.toLogin();
    }
  }
  public toLogin() {
    this.$router.push('/login');
  }
  @Watch('$route')
  private routeChange(val: Route): void {
    if (val.path === '/login') {
      if (this.isOrLogin) { this.$router.push('/main'); }
    }
  }
}
</script>
<style lang="less">
</style>
