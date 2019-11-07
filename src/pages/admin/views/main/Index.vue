<template>
  <div class="admin-index">
    <p v-for="i in 50"
       :key="i">
      内容
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Index extends Vue {
}
</script>
<style lang="less">
.admin-index {
}
</style>
