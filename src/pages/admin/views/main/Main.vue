<template>
  <el-container class="admin-main">
    <el-aside :width="collapse?'64px':'220px'" style="transition: all 0.5s">
      <h2 class="a-m-h" :class="collapse?'a-m-collapse':''">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-candan" />
        </svg>
        <span v-if="!collapse">我的博客</span>
      </h2>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        :unique-opened="true"
        :collapse-transition="false"
        :router="true"
        :collapse="collapse"
      >
        <el-submenu v-for="(e,i) in treeMenu" :key="i" :index="e.index">
          <template slot="title">
            <i :class="e.icon"></i>
            <span slot="title">{{e.firstLevel}}</span>
          </template>
          <el-menu-item-group v-for="(c,d) in e.children" :key="e.index + '-' + d">
            <el-menu-item
              :index="e.index + d"
              :route="c.path"
              @click="handleOpen(e.index + d, c.name, e.firstLevel)"
            >{{c.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="asset a-m-header">
        <div class="a-m-h-left">
          <svg class="icon icon-menus" @click="collapse = !collapse" aria-hidden="true">
            <use xlink:href="#icon-drxx11" />
          </svg>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{name?name:'首页'}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{activeName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="a-m-h-right">
          <img v-if="mySelfInfo.avatar" :src="mySelfInfo.avatar" alt />
          <svg v-else class="icon" aria-hidden="true">
            <use xlink:href="#icon-touxiang-nan" />
          </svg>
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
import { Action, State } from 'vuex-class';
import { routeTree } from '../../createRouteTree';

@Component({
  components: {},
})
export default class Main extends Vue {
  private collapse: boolean = false;
  private treeMenu: any = [];
  private activeIndex: any = null;
  private activeName: any = null;
  private name: any = null;
  @State private user;
  get menus(): object[] {
    let arr: object[] = [];
    return arr;
  }
  get mySelfInfo(): any {
    return this.user.myInfo;
  }
  public created() {
    if (localStorage.treeIndex) {
      this.activeIndex = localStorage.treeIndex;
    }
    if (localStorage.treeActiveName) {
      this.activeName = localStorage.treeActiveName;
    }
    if (localStorage.treeName) {
      this.name = localStorage.treeName;
    }
    this.treeMenu = routeTree();
  }
  public handleOpen(index, name, firstName) {
    this.activeName = name;
    this.name = firstName;
    localStorage.treeIndex = index;
    localStorage.treeActiveName = name;
    localStorage.treeName = firstName;
  }
  public destroyed() {
    localStorage.removeItem('treeIndex');
    localStorage.removeItem('treeActiveName');
    localStorage.removeItem('treeName');
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
      box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0);
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
      margin-right: 20px;
    }
    .a-m-h-left {
      display: flex;
      align-items: center;
      .el-breadcrumb {
        font-size: 16px;
        line-height: 1.5;
      }
    }
    .a-m-h-right {
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        border-radius: 50%;
      }
    }
  }
  .el-main {
    height: calc(100vh - 140px);
    overflow-y: scroll;
    .common-card;
    margin: 20px 0 0 20px;
  }
  // .a-m-main {
  //   .common-card;
  //   padding: 14px 20px;
  //   height: 100%;
  // }
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
.small-input {
  width: 300px;
}
.medium-input {
  width: 500px;
}
.mini-input {
  width: 100px;
}
</style>
