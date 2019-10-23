<template>
  <div class="header">
    <div class="header-wraps">
      <nav class="gg-navbar">
        <div class="nav-limit">
          <div class="nav-left">
            <slot name="icon"></slot>
            <span class="app-title">{{title}}</span>
            <slot></slot>
          </div>
          <ul class="app-menus"
              v-if="!noMenus">
            <router-link tag="li"
                         to="/index"
                         v-if="!noRoot"><a>首页</a></router-link>
            <router-link tag="li"
                         v-for="m in menus"
                         :key="m.name"
                         :to="m.path"
                         active-class="active">
              <a>{{m.name}}</a>
            </router-link>
          </ul>
          <div class="nav-right">
            <!-- 个人信息 -->
            <el-dropdown placement="bottom"
                         trigger="click"
                         @command="commandInfo">
              <a class="name"><span>{{2}}</span><i class="el-icon-caret-bottom"></i></a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="personInfo">个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
declare let document: Document | any;
@Component
export default class Header extends Vue {
  @Prop({ default: document.title }) public title!: string;
  @Prop({ default: false }) public noMenus!: boolean;
  @Prop({ default: false }) public noRoot!: boolean;
  @Prop({ default: [] }) public menus!: object[];
  public commandInfo(command: string): void {
    console.log(command);
  }
  public created() {
    // console.log(this.menus);
  }
}
</script>
<style lang="less">
@color: #fff;
@color-ss: #404040;
.header {
  pointer-events: none;
  opacity: 0.7;
  .header-wraps {
    .gg-navbar {
      width: 100%;
      background-color: @color;
      box-shadow: 1px 1px 20px 0px rgba(110, 125, 195, 0.2);
      .nav-limit {
        height: 66px;
        width: 1200px;
        margin: 0 auto;
        .flex-between;
        align-items: center;
      }
      .nav-left {
        .app-title {
          font-size: 18px;
          font-weight: bold;
          color: @color-t;
        }
        .icon {
          font-size: 20px;
          margin-right: 6px;
        }
      }
      .app-menus {
        display: inline-block;
        li {
          pointer-events: auto;
          display: inline-block;
          vertical-align: middle;
          height: 30px;
          font-size: 15px;
          padding: 0 10px;
          margin: 0 5px;
          color: @color-ss;
          a {
            display: block;
            line-height: 30px;
            padding: 0 14px;
          }
          &:hover {
            color: @color;
            background-color: #6e7dc3;
            border-radius: 15px;
          }
          &.active,
          &.router-link-exact-active.router-link-active {
            color: @color;
            background-color: #6e7dc3;
            border-radius: 15px;
          }
        }
      }
      .nav-right {
        font-size: 14px;
        .name {
          margin: 0;
          span {
            display: inline-block;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            line-height: 25px;
            text-align: center;
            font-size: 14px;
            background-color: @color-t;
            color: @color;
          }
          i {
            font-size: 12px;
            margin-left: 2px;
          }
        }
        .el-dropdown {
          pointer-events: auto;
        }
      }
    }
  }
}
</style>
