<template>
  <el-menu
    :default-active="currentPage"
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
        v-if="item.children.length === 1"
        :index="item.children[0].path"
      >
        <i :class="item.meta.icon"></i>
        <span style="padding-left: 15px">{{ item.meta.title }}</span>
      </el-menu-item>
      <!--  渲染有多个菜单的路由 -->
      <el-submenu
        v-else
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span style="padding-left: 15px">{{ item.meta.title }}</span>
        </template>
        <el-menu-item  v-for="children in item.children" :key="children.index" :index="children.path">
          <span style="padding-left: 15px">{{children.meta.title}}</span>
        </el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import { allRole } from '@/router/rolesFront.js'
// import { mapGetters } from 'vuex'
export default {

  data () {
    return {
      userRoutes: [],
      childArr: [],
      // allRole,
      routerMapping: {}
    }
  },
  props: ['is-collapse'],
  components: {},
  computed: {
    currentPage () {
      // console.log(this.$store.getters.getCurrentPage)
      return this.$store.getters.getCurrentPage
    }
  },
  created () {
    // console.log(this.$route.path)
    // this.showdata()
    // this.ceshi()
  },
  mounted () {
    this.roleinit() // 获取角色对应的路由
    this.initRouter()
  },
  watch: {
  },
  destroyed () { },
  methods: {
    // showdata () {
    //   const allRouters = this.$router.options.routes
    //   const childArr = [] // 定义储存子路由的数组
    //   const userRoutes = [] // 定义用户数组
    //   const userrole = sessionStorage.getItem('role')
    //   allRouters.forEach(item => {
    //     if (this.routerFilter(item) && item.children) { // 如果没有设置hidden属性 且有子路由
    //       item.children.forEach(i => {
    //         if (!i.meta.role) {
    //           childArr.push(i)
    //         } else {
    //           if (i.meta.role.indexOf(userrole) !== -1) {
    //             childArr.push(i)
    //           }
    //         }
    //       })
    //       userRoutes.push(item)
    //     }
    //   })
    //   this.userRoutes = userRoutes
    //   this.childArr = childArr
    //   console.log(userRoutes, 'userRoutes')
    //   console.log(childArr, 'childArr')
    // },
    initRouter () {
      const routerInit = this.$router.options.routes // 获取所有路由
      // console.log(routerInit, 'routerInit')
      const userRoutes = []
      routerInit.forEach(item => {
        if (this.isExistInRouter(item)) {
          const childArr = []
          item.children.forEach(itemchildren => {
            if (this.isExistInRouter(itemchildren)) {
              childArr.push(itemchildren)
            }
          })
          item.children = childArr
          userRoutes.push(item)
        }
      })
      this.userRoutes = userRoutes
      // console.log(userRoutes, 'userRoutes')
    },
    isExistInRouter (item) {
      // 这个函数用来筛选一下路由 筛选出没有设置hidden 而且在权限之内的路由
      return !!(item.hidden === undefined && this.routerMapping.toString().indexOf(item.name) !== -1)
      // 双！返回布尔值
    },
    roleinit () {
      // console.log(allRole)
      const roles = sessionStorage.getItem('roles')
      this.routerMapping = allRole['role' + roles]
      // console.log(this.routerMapping.toString(), 'routerMapping')
      // console.log(typeof this.routerMapping, 'routerMapping')
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
