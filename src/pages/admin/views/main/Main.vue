<template>
  <el-container class="admin-main">
    <el-aside :width="collapse?'64px':'220px'"
              style="transition: all 0.5s">
      <h2 class="a-m-h"
          :class="collapse?'a-m-collapse':''">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-candan"></use>
        </svg>
        <span v-if="!collapse">我的博客</span>
      </h2>
      <el-menu default-active="1-4-1"
               class="el-menu-vertical-demo"
               :unique-opened="true"
               :collapse-transition="false"
               @open="handleOpen"
               @close="handleClose"
               :collapse="collapse">
        <el-submenu :index="e + ''"
                    v-for="(e,i) in 3"
                    :key="i">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航{{e}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="'1-' + e">选项{{e}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="asset a-m-header">
        <svg class="icon icon-menus"
             @click="collapse = !collapse"
             aria-hidden="true">
          <use xlink:href="#icon-drxx11"></use>
        </svg>
        <div>
          123
        </div>
      </el-header>
      <el-main>
        <div class="a-m-main">
          <router-view />
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Main extends Vue {
  private collapse: boolean = false
  get menus(): object[] {
    let arr: object[] = [];
    return arr;
  }
  public handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }
  public handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>
<style lang="less">
@color-f: #fff;
.admin-main {
  background-color: #f1f2f3;
  min-height: 100vh;
  .el-menu-vertical-demo {
    border: none;
    background-color: #545c64;
    height: calc(100vh - 60px);
    .el-submenu__title,
    .el-menu-item {
      color: @color-p;
      &:hover {
        background-color: rgba(255, 252, 252, 0.2);
        color: @color-f;
      }
    }
    .is-opened {
      .el-submenu__title {
        color: @color-f;
      }
    }
    .el-menu-item-group__title {
      padding: 0;
    }
    .el-menu-item-group {
      background: #747b81;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.45);
    }
    .el-menu-item {
      // background-color: none;
      &.is-active {
        background-color: @color-t;
        color: @color-f;
      }
    }
  }
  .el-aside {
    max-width: 300px;
  }
  .asset {
    height: 60px;
    line-height: 60px;
  }
  .a-m-header {
    background: @color-f;
    .flex-between;
    border-bottom: 1px solid @color-b;
    align-items: center;
    .icon-menus {
      cursor: pointer;
    }
  }
  .el-main {
    height: calc(100vh - 120px);
  }
  .a-m-main {
    .common-card;
    padding: 14px 20px;
    height: 100%;
    overflow: auto;
  }
  .el-footer {
    line-height: 60px;
    text-align: center;
  }
  .a-m-h {
    .asset;
    background-color: #2c333a;
    color: @color-f;
    text-align: center;
    .icon {
      margin-right: 4px;
    }
    &.a-m-collapse {
      width: 64px;
    }
  }
}
</style>
