<template>
  <el-container class="layout-container">
    <el-aside class="aside" :width="isCollapse ? '64px' : '200px'">
      <SideBar :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i :class="{
            'el-icon-s-fold' : !isCollapse ,
            'el-icon-s-unfold' : isCollapse
          }"
          style="cursor: pointer" @click="isCollapse = !isCollapse"> </i>
          <span style="margin-left: 10px">wjc-vue-template</span>
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
// import { sceneMixin } from '../utils/testMixin'
import { mapGetters } from 'vuex'
export default {
  // mixins: [sceneMixin],
  name: 'LayoutIndex',
  data () {
    return {
      isCollapse: false
    }
  },

  components: {
    SideBar: SideBar
  },
  computed: {
    ...mapGetters(['GET_NAME', 'GET_PHOTO'])
  },
  created () { },
  mounted () { },
  destroyed () { },
  methods: {
    quit () {
      this.$router.push('/login')
      sessionStorage.clear() // 清空sessionstorage里面的所有数据
      window.location.reload() // 刷新vuex
    },
    toPeople () {
      this.$router.push('/people')
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
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
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
