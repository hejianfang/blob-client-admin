<template>
  <div class="editor">
    <mavon-editor
      style="height: 100%;width: 100%;"
      v-model="editorValue"
      :ishljs="true"
      ref="md"
      @imgAdd="imgAdd"
      @imgDel="imgDel"
    ></mavon-editor>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { Action, State } from 'vuex-class';

@Component({
  components: { mavonEditor },
})
export default class Editor extends Vue {
  @Action('uploadFiles') public toUploadFiles;
  private editorValue: string = '';

  // 添加图片
  public imgAdd(pos, $file) {
    const size = $file.size;
    if (size >= 200 * 1024 * 1024) {
      return this.$error('最大不可超过2M');
    }
    this.toUploadFiles($file).then((res: any) => {
      (this.$refs.md as any).$img2Url(pos, res.filePath);
    });
  }
  // 删除图片
  public imgDel() { console.log(1); }
  @Watch('editorValue')
  private valueChange(val: any): void {
    this.$emit('input', val);
  }
}
</script>
<style lang="less">
.editor {
}
</style>