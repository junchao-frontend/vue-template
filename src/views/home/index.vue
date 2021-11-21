<template>
<div class="container">
<!-- <el-row :gutter="40" style="margin-left: 20px;margin-right:20px; margin-top: 40px;">
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
</el-row> -->
<el-row :gutter="20" class="panel-group">
  <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon icon-people">
          <i class="el-icon-s-management panel-icon"></i>
        </div>
        <div class="card-panel-description">
            <div class="card-panel-text">New Books</div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
  </el-col>
<el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon icon-people">
          <i class="el-icon-s-management panel-icon"></i>
        </div>
        <div class="card-panel-description">
            <div class="card-panel-text">New Books</div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
  </el-col>
  <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon icon-people">
          <i class="el-icon-s-management panel-icon"></i>
        </div>
        <div class="card-panel-description">
            <div class="card-panel-text">New Books</div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
  </el-col>
  <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon icon-people">
          <i class="el-icon-s-management panel-icon"></i>
        </div>
        <div class="card-panel-description">
            <div class="card-panel-text">New Books</div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
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
<div class="big_box">
  <div class="left_box">
    <rotation></rotation>
  </div>
  <div class="right_box">
    <rotation></rotation>
  </div>
</div>
  <el-drawer
  :with-header="false"
  :size='size'
  :show-close='false'
  wrapperClosable
  :visible.sync="drawer"
  close-on-press-escape
  :modal-append-to-body='false'
  :before-close="handleClose">
  <div class="person-info">
  <el-form ref="form" label-width="80px">
  <el-form-item label="头像:">
    <img :src="GET_PHOTO" style="width:80px;height:80px;border-radius: 20%">
  </el-form-item>
  <el-form-item label="手机号:">
    <span>{{15533570808}}</span>
  </el-form-item>
  <el-form-item label="姓名:">
    <span>{{'王军潮'}}</span>
  </el-form-item>
  <el-form-item label="邮箱:">
    <span>{{'1109355524@qq.com'}}</span>
  </el-form-item>
  <el-form-item label="权限:">
    <span>{{GET_NAME}}</span>
  </el-form-item>
  <el-form-item label="角色:">
    <span>{{GET_ROLE}}</span>
  </el-form-item>
  <el-form-item>
    <el-button @click="quit">用户退出</el-button>
  </el-form-item>
</el-form>
</div>
</el-drawer>
<div @click="openDrawer" class="theme-icon" :style="{right: themeSize+ 'px'}">
  <i :class="drawer ? 'el-icon-close' : 'el-icon-s-custom'"></i>
</div>
</div>
</template>
<script>
import lineechart from '../../components/echarts/line'
import rotation from '../../components/echarts/Rotation'
import CountTo from 'vue-count-to'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeIndex',
  data () {
    return {
      drawer: false,
      size: '14%',
      themeSize: '14'
    }
  },
  components: {
    lineechart,
    rotation,
    CountTo
  },
  computed: {
    ...mapGetters(['GET_NAME', 'GET_ROLE', 'GET_PHOTO'])
  },
  created () {},
  mounted () {
  },
  destroyed () {},
  methods: {
    handleClose (done) {
      done()
      this.themeSize = '14'
    },
    quit () {
      this.$router.push('/login')
      sessionStorage.clear() // 清空sessionstorage里面的所有数据
      window.location.reload() // 刷新vuex
    },
    openDrawer (e) {
      // console.log(e.target.className)
      if (e.target.className === 'el-icon-s-custom') {
        this.drawer = true
        this.themeSize = '245'
      } else {
        this.drawer = false
        this.themeSize = '14'
      }
    }
  }
}
</script>
<style lang='scss' scoped>
// @import './test.scss';
.panel-group{
  margin-top: 20px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel{
    cursor: pointer;
    height: 108px;
    font-size: 12px;
    background: #fff;
    .panel-icon{
      margin: 14px 0 0 14px;
      padding: 11px;
      color: rgb(64,201,198);
      float: left;
      font-size: 55px;
    }
    .card-panel-description{
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text{
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
@media (max-width:550px) {
   .card-panel-description {
    display: none;
  }
  .card-panel-icon {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .panel-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
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
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .container{
    overflow: hidden;
    flex-direction: column;
    display: flex;
    .person-info{
      /deep/ .el-form-item{
        // font-size: 50px;
        color: rgb(0, 0, 0);
        margin-top: 60px;
      }
      margin: 50px auto;
    }
    .theme-icon{
      transition: right 0.25s cubic-bezier(0.4, 0.49, 0.45, 0.99);
      z-index: 3000;
      cursor: pointer;
      font-size: 25px;
      width: 48px;
      height: 48px;
      background-color: rgb(24, 144, 255);
      border-radius: 6px 0 0 6px!important;
      position: fixed;
      top: 35%;
      color: #fff;
      text-align: center;
      line-height: 49px;
    }
    /deep/ .el-drawer{
      overflow: unset;
    }
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
    box-shadow: 0 0 5px #9f9191;
    margin-top: 40px;
    margin-left: 40px;
    margin-right:40px;
    height: 500px;
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
    // box-shadow: 0 0 5px black;
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
