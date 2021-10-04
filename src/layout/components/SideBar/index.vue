<template>
  <el-menu
    :default-active="$route.path"
    class="menu"
    router
    background-color="#0E1629"
    text-color="#fff"
    :collapse-transition="false"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
  >
    <div v-for="item in userRoutes" :key="item.index">
      <!-- 渲染没有一级菜单 而且没有设置hidden属性 -->
      <!-- <el-menu-item
        v-if="item.children === undefined"
        :index="item.path"
      >
        <i :class="item.meta.icon" />
        <span style="padding-left: 15px">{{ item.meta.title }}</span>
      </el-menu-item> -->
      <!-- 渲染只有一个一级菜单的路由 -->
      <el-menu-item
        v-if="item.children && item.children.length === 1"
        :index="item.path"
      >
        <i :class="item.meta.icon"></i>
        <span style="padding-left: 15px">{{ item.children[0].meta.title }}</span>
      </el-menu-item>
      <!--  渲染有多个菜单的路由 -->
      <el-submenu
        v-if="item.children && item.children.length > 1"
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span style="padding-left: 15px">{{ item.meta.title }}</span>
        </template>
        <el-menu-item  v-for="children in childArr" :key="children.index" :index="children.path">
          <span style="padding-left: 15px">{{children.meta.title}}</span>
        </el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
export default {

  data () {
    return {
      userRoutes: [],
      childArr: [],
      role: ''
    }
  },
  props: ['is-collapse'],
  components: {},
  computed: {},
  created () {
    // console.log(this.$route.path)
    this.showdata()
    // this.ceshi()
  },
  mounted () {
    // this.initRouter()
  },
  destroyed () { },
  methods: {
    showdata () {
      const allRouters = this.$router.options.routes
      const childArr = [] // 定义储存子路由的数组
      const userRoutes = [] // 定义用户数组
      this.role = sessionStorage.getItem('role')
      allRouters.forEach(item => {
        if (this.routerFilter(item) && item.children) { // 如果没有设置hidden属性 且有子路由
          userRoutes.push(item)
        }
        if (this.routerFilter(item) && item.children.length > 1) {
          item.children.forEach(i => {
            childArr.push(i)
          })
        }
      })
      this.userRoutes = userRoutes
      this.childArr = childArr
      console.log(userRoutes, 'userRoutes')
      console.log(childArr, 'childArr')
    },
    routerFilter (item) {
      // 这个函数用来筛选一下路由 筛选出没有设置hidden的路由
      return !(item.hidden)
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.menu {
  height: 100%;
  width: 100%;
}
</style>
