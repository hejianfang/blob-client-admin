<template>
  <div class="admin-article-create">
    <div class="a-ac-form">
      <el-form label-position="left" label-width="80px">
        <el-form-item label="文章标题">
          <el-input
            v-model="form.name"
            class="medium-input"
            size="small"
            placeholder="请输入文章标题，50字之内..."
            maxlength="50"
          ></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author" size="small" class="small-input"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
          <el-tag
            :key="tag"
            v-for="tag in form.keywords"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
            class="a-ar-tag"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag mini-input"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            maxlength="12"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+关键字</el-button>
        </el-form-item>
        <el-form-item label="文章封面">
          <el-upload
            class="avatar-uploader"
            action
            :http-request="uploadFile"
            :show-file-list="false"
          >
            <img v-if="form.cover" :src="form.cover" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="文章简介">
          <el-input
            class="a-ac-textarea"
            type="textarea"
            placeholder="请输入内容"
            v-model="form.intro"
            maxlength="300"
            resize="none"
            :rows="3"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.articleType" size="small">
            <el-option :value="0" label="普通文章"></el-option>
            <el-option :value="1" label="简历"></el-option>
            <el-option :value="2" label="项目经验"></el-option>
            <el-option :value="3" label="难点记录"></el-option>
          </el-select>
          <el-select v-model="form.original" size="small">
            <el-option :value="0" label="原创"></el-option>
            <el-option :value="1" label="转载"></el-option>
            <el-option :value="2" label="混合文章"></el-option>
          </el-select>
          <el-select
            v-model="form.tag"
            size="small"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签"
          >
            <el-option
              v-for="(item,index) in tagsList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="form.level"
            multiple
            size="small"
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签"
          >
            <el-option
              v-for="(item,index) in levelList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="info" @click="toSave(0)">存为草稿</el-button>
          <el-button size="small" type="primary" @click="toSave(1)">发布</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="a-ac-content">
      <Editor v-model="form.content"></Editor>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Editor from '../../../components/Editor';
interface formType {
  name: string | number;
  author: string | number;
  keywords: any;
  cover: string;
  intro: string;
  articleType: number;
  original: number;
  tag: any;
  level: any;
  state: number;
  content: string
}
@Component({
  components: { Editor },
})
export default class ArticleCreate extends Vue {
  @Action('uploadFiles') public toUploadFiles;
  @Action('addArticle') public toAddArticle;
  @Action('getArticleDetailForId') public getArticleDetailForId;
  private form: formType = {
    name: '',
    author: 'Aomr"',
    keywords: [],
    cover: '',
    intro: '',
    articleType: 0,
    original: 0,
    tag: [],
    level: [],
    state: 1,
    content: ''
  }
  private inputVisible: boolean = false
  private inputValue: any = ''
  private levelList: object[] = []
  private tagsList: object[] = []
  public created() {
    if (this.$route.query.id) {
      this.getArticleDetail()
    }
  }
  // 获取文章详情
  public getArticleDetail() {
    this.getArticleDetailForId({ id: this.$route.query.id }).then(res => {
      console.log(res)
    })
  }
  public handleClose(tag) {
    this.form.keywords.splice(this.form.keywords.indexOf(tag), 1);
  }
  public showInput() {
    this.inputVisible = true;
    this.$nextTick(() => {
      this.$refs.saveTagInput.$refs.input.focus();
    })
  }
  public handleInputConfirm() {
    let inputValue = this.inputValue;
    if (inputValue) {
      this.form.keywords.push(inputValue);
    }
    this.inputVisible = false;
    this.inputValue = '';
  }
  // 上传到服务器
  public uploadFile(param) {
    const size = param.file.size
    if (size >= 200 * 1024 * 1024) {
      return this.$error('最大不可超过2M')
    }
    this.toUploadFiles(param.file).then(res => {
      this.form.cover = res.filePath
    })
  }
  public toSave(state) {
    this.form.state = state
    this.toAddArticle(this.form).then(res => {
      if (res.code === 200) {
        this.$success(res.msg)
        this.$router.push('list')
      }
    }).catch(this.$error)
  }
}
</script>
<style lang="less">
.admin-article-create {
  .a-ac-form {
    .el-form-item {
      margin-bottom: 10px;
    }
    .a-ar-tag {
      margin-right: 10px;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .a-ac-textarea {
      width: 800px;
    }
  }
  .a-ac-content {
    padding-left: 80px;
  }
}
</style>
