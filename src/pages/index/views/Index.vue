<template>
  <div class="index">
    <div class="index-wraps">
      <h1>欢迎来到我的博客</h1>
      <nav>
        <ul>
          <li v-for="(n,i) in navList"
              :key="i">
            <a @click="toPath(n.path)">{{n.name}}</a>
          </li>
        </ul>
      </nav>
      <h2>时光正好，未来可期，加油 ！</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Index extends Vue {
  private navList: object[] = [
    { name: '文章', path: '/actice' },
    { name: '项目', path: '/project' },
    { name: '归档', path: '/archive' },
    { name: '历程', path: '/timeline' },
    { name: '留言', path: '/message' },
    { name: '关于', path: '/about' },
  ];
  public toPath(path: string): void {
    this.$router.push(path);
  }
}
</script>
<style lang="less">
.index {
  height: 100vh;
  .index-wraps {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
      text-align: center;
      letter-spacing: 6px;
      color: #fff;
      font-weight: bold;
    }
    > h2 {
      color: @color-tt;
      font-weight: bold;
    }
    nav {
      width: 600px;
      margin: 6% auto;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          pointer-events: auto;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          &:hover {
            color: aqua;
          }
          & + li {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
