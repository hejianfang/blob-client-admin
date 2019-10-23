<template>
  <div class="actice">
    <div class="actice-wraps">
      <el-row>
        <el-col :span="16">
          <ul>
            <li v-for="(item,index) in 15"
                :key="index">
              <div class="a-left">
                <h3 title="标题">标题{{index}}</h3>
                <p>简介</p>
                <p>
                  <span>查看</span>
                  <span>评论</span>
                  <span>赞</span>
                  <span>时间</span>
                </p>
              </div>
              <img src="../../../assets/img/timg.jpg" />
            </li>
          </ul>
        </el-col>
        <el-col :span="8">
          右部分
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Actice extends Vue { }
</script>
<style lang="less">
.actice {
  height: 100%;
  .actice-wraps {
    .el-row {
      .el-col-8 {
        padding-left: 20px;
        // border-left: @border-d;
      }
      .el-col-16 {
        ul {
          li {
            cursor: pointer;
            background-color: rgba(221, 194, 194, 0.8);
            box-shadow: 0 0 20px 0 rgba(214, 125, 177, 0.23);
            padding: 10px 16px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: space-between;
            height: 100px;
            border-radius: 10px;
            &:hover {
              transform: scale(1.01);
            }
            h3 {
              font-weight: bold;
            }
            .a-left {
              height: 80px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            & + li {
              margin-top: 20px;
            }
          }
        }
        img {
          width: 80px;
          height: 80px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
