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
        <el-form-item label="关键字">
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
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
interface formType {
  name: string | number;
  author: string | number;
  keywords: any;
  cover: string;
}
@Component({
  components: {},
})
export default class ArticleCreate extends Vue {
  @Action('uploadFiles') public toUploadFiles;
  private form: formType = {
    name: '',
    author: 'Aomr"',
    keywords: [],
    cover: ''
  }
  private inputVisible: boolean = false
  private inputValue: any = ''


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
    this.toUploadFiles(param.file).then(res => {
      this.form.cover = res.filePath
    })
  }
}
</script>
<style lang="less">
.admin-article-create {
  .a-ac-form {
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
  }
}
</style>
