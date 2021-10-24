<template>
<div class="container">
    <!-- <el-button v-permission = "{role:['admin']}">管理员能看见</el-button>
    <el-button v-permission = "{role:['student']}">学生能看见</el-button>
    <el-button v-permission = "{role:['admin', 'student']}">都能看见</el-button>
    <el-button v-disabled = "{effect:'disabled'}">禁用按钮</el-button> -->
<el-row :gutter="40" style="margin-left: 20px;margin-right:20px; margin-top: 35px;">
  <el-col :span="6">
    <div class="grid-content">
      <div class="icon-style">
        <i class="el-icon-s-management"></i>
      </div>
      <div class="text">
        <span style="display: block;;margin-bottom:10px">New Visites</span>
        <span style="display: block;">102,400</span>
      </div>
    </div>
  </el-col>
  <el-col :span="6">
      <div class="grid-content">
      <div class="icon-style2">
        <i class="el-icon-chat-dot-square"></i>
      </div>
      <div class="text">
        <span style="display: block;;margin-bottom:10px">Messages</span>
        <span style="display: block;">81,165</span>
      </div>
    </div>
    </el-col>
  <el-col :span="6">
    <div class="grid-content">
      <div class="icon-style3">
        <i class="el-icon-s-promotion"></i>
      </div>
      <div class="text">
        <span style="display: block;;margin-bottom:10px">Airplanes</span>
        <span style="display: block;">9,268</span>
      </div>
    </div>
    </el-col>
  <el-col :span="6">
    <div class="grid-content">
      <div class="icon-style4">
        <i class="el-icon-basketball"></i>
      </div>
      <div class="text">
        <span style="display: block;;margin-bottom:10px">Basketballs</span>
        <span style="display: block;">13,551</span>
      </div>
    </div>
    </el-col>
</el-row>
<div class="big_box">
  <div class="left_box">
    <lineechart></lineechart>
  </div>
  <div class="right_box">
    <rotation></rotation>
  </div>
</div>
</div>
</template>

<script>
import lineechart from '../../components/echarts/line'
import rotation from '../../components/echarts/Rotation'
export default {
  name: 'HomeIndex',
  data () {
    return {
    }
  },
  components: {
    lineechart,
    rotation
  },
  computed: {},
  created () {},
  mounted () {
  },
  destroyed () {},
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .row-bg {
    // padding: 10px 0;
    background-color: #f9fafc;
  }
  .container{
    justify-content: center;
    flex-direction: column;
    display: flex;
  }
  .grid-content{
    align-items: center;
    justify-content: space-between;
    display: flex;
    cursor: pointer;
    border-radius: 4px;
    min-height: 36px;
    background-color: rgb(255, 255, 255);
    height: 150px;
  }
  .big_box{
    margin-top: 35px;
    margin-left: 40px;
    margin-right:40px;
    height: 400px;
    // border: 1px solid red;
  }
  .icon-style{
    float: left;
    margin-left: 25px;
    font-size: 65px;
    color: rgb(64, 201, 198);
  }
  .icon-style2{
    float: left;
    margin-left: 25px;
    font-size: 65px;
    color: rgb(65, 124, 212);
  }
  .icon-style3{
    float: left;
    margin-left: 25px;
    font-size: 65px;
    color: rgb(212, 65, 65);
  }
  .icon-style4{
    float: left;
    margin-left: 25px;
    font-size: 65px;
    color: rgb(193, 76, 27);
  }
  .text{
    float: right;
    font-weight:bold;
    font-size: 18px;
    margin-right: 25px;
  }
  .left_box{
    float: left;
    width: 65%;
    height: 100%;
    background-color: rgb(255, 255, 255);
  }
  .right_box{
    float: left;
    width: 35%;
    height: 100%;
    background-color: rgb(255, 255, 255);
  }
</style>
