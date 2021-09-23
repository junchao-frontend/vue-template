<template>
  <el-container class="layout-container">
    <el-aside width="180px">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i class="el-icon-s-fold" style="cursor: pointer"> </i>
          <span style="margin-left: 10px">wjc-vue-template</span>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>用户推出</el-dropdown-item>
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
export default {
  name: 'LayoutIndex',
  data () {
    return {
    }
  },

  components: {
    SideBar: SideBar
  },
  computed: {},
  created () { },
  mounted () { },
  destroyed () { },
  methods: {}
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
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
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
</style>
