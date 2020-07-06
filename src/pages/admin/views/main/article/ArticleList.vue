<template>
  <div class="admin-article-list">
    <el-input v-model="search.searchName" placeholder="标题或者关键字" class="small-input" size="small"></el-input>
    <el-select v-model="search.state" size="small" class="middle">
      <el-option :value="null" label="所有"></el-option>
      <el-option :value="0" label="草稿"></el-option>
      <el-option :value="1" label="已发布"></el-option>
    </el-select>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchList">search</el-button>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-circle-plus-outline"
      @click="$router.push('create')"
    >add</el-button>
    <table class="common-table">
      <tr>
        <th>标题</th>
        <th>作者</th>
        <th>关键字</th>
        <th>封面图</th>
        <th>标签</th>
        <th>分类</th>
        <th>原创状态</th>
        <th>创建时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="(a,i) in articleList" :key="i">
        <td>{{a.name}}</td>
        <td>{{a.author}}</td>
        <td>{{a.keywords.join('、')}}</td>
        <td>
          <img :src="a.cover" alt />
        </td>
        <td>{{a.tag}}</td>
        <td>{{a.level}}</td>
        <td>{{a.original}}</td>
        <td>{{a.create_time | date('YYYY-MM-DD')}}</td>
        <td>
          <a @click="editArticle(a.id)">编辑</a>
          <a @click="deleteArticle(a.id)">删除</a>
        </td>
      </tr>
      <tr v-if="articleList && !articleList.length">
        <td colspan="9">暂无内容</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
interface searchType {
  page: number,
  size: number,
  state: any,
  searchName: any
}
@Component({
  components: {},
})
export default class ArticleList extends Vue {
  @Action('getArticlePages') public getArticlePages;
  private search: searchType = {
    page: 1,
    size: 10,
    state: null,
    searchName: ''
  }
  public articleList: object[] = []
  public created() {
    this.getArticleList()
  }
  public searchList() {
    this.search.page = 1
    this.getArticleList()
  }
  public getArticleList() {
    this.getArticlePages(this.search).then(res => {
      this.articleList = res.data.list
    }).catch(this.$error)
  }
  public editArticle(id) {
    this.$router.push(`create?id=${id}`)
  }
  public deleteArticle(id) {

  }
}
</script>
<style lang="less">
.admin-article-list {
  .middle {
    margin: 0 10px;
  }
  .common-table {
    td {
      img {
        width: 50px;
        height: 50px;
        vertical-align: middle;
      }
      a + a {
        margin-left: 20px;
        color: @color-w;
      }
    }
  }
}
</style>
