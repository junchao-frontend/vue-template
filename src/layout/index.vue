<template>
  <el-container class="layout-container">
    <el-aside class="aside" :width="isCollapse ? '64px' : '205px'">
      <SideBar :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header class="header">
        <span>
          <i :class="{
            'el-icon-s-fold' : !isCollapse ,
            'el-icon-s-unfold' : isCollapse
          }"
          style="cursor: pointer;font-size:15px" @click="isCollapse = !isCollapse"> </i>
          <!-- <span style="marginLeft:22px">{{nowdata}}</span> -->
        </span>
        <div  class="breadcrumb">
          <BreadCrumb></BreadCrumb>
        </div>
        <el-dropdown>
          <div class="avatar-warp">
          <img class="portrait" :src="GET_PHOTO">
          <span class="el-dropdown-link">
           {{GET_NAME}}
           </span>
          <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toPeople">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="quit">用户退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from '../layout/components/SideBar'
import BreadCrumb from '../layout/components/BreadCrumb'
// import { sceneMixin } from '../utils/testMixin'
import { mapGetters } from 'vuex'
export default {
  // mixins: [sceneMixin],
  name: 'LayoutIndex',
  data () {
    return {
      isCollapse: false,
      nowdata: null
    }
  },
  components: {
    SideBar: SideBar,
    BreadCrumb: BreadCrumb
  },
  computed: {
    ...mapGetters(['GET_NAME', 'GET_PHOTO'])
  },
  created () { },
  mounted () {
    // this.getTimes()
  },
  destroyed () { },
  methods: {
    quit () {
      this.$router.push('/login')
      sessionStorage.clear() // 清空sessionstorage里面的所有数据
      window.location.reload() // 刷新vuex
    },
    toPeople () {
      this.$router.push('/people')
    },
    getTimes () {
      clearTimeout(this.nowdata)
      var date = new Date()
      var year = (date.getFullYear() + '').padStart(2, '0')
      var month = (date.getMonth() + 1 + '').padStart(2, '0')
      var day = (date.getDate() + '').padStart(2, '0')
      var hours = (date.getHours() + '').padStart(2, '0')
      var seconds = (date.getSeconds() + '').padStart(2, '0')
      var min = (date.getMinutes() + '').padStart(2, '0')
      var week = date.getDay()
      switch (week) {
        case 0:
          week = '星期天'
          break
        case 1:
          week = '星期一'
          break
        case 2:
          week = '星期二'
          break
        case 3:
          week = '星期三'
          break
        case 4:
          week = '星期四'
          break
        case 5:
          week = '星期五'
          break
        case 6:
          week = '星期六'
      }
      this.nowdata = setTimeout(this.getTimes, 1000)
      this.nowdata = `${year}/${month}/${day} ${week} ${hours}:${min}:${seconds}`
    }
  }
}
</script>
<style scoped>
.layout-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.aside {
  background-color: #0E1629;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
}
.header {
  position: relative;
  background-color: rgb(247,247,247);
  color: #333;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.breadcrumb{
  position: absolute;
  left: 47px;
  display: flex;
  align-items: center;
}
.portrait{
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}
.avatar-warp{
  display: flex;
  align-items: center;
}
</style>
