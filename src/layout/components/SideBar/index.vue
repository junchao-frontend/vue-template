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
  <itemRoute :routerData = "userRoutes"></itemRoute>
  </el-menu>
</template>

<script>
import { allRole } from '@/router/rolesFront.js'
import itemRoute from './itemRoutes.vue'
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
  components: {
    itemRoute
  },
  computed: {
    currentPage () {
      // console.log(this.$store.getters.getCurrentPage)
      return this.$store.getters.getCurrentPage
    }
  },
  created () {
    this.roleinit() // 获取角色对应的路由
    this.initRouter()
  },
  mounted () {
  },
  watch: {
  },
  destroyed () { },
  methods: {
    initRouter () {
      // const routerInit = this.$router.options.routes // 获取所有路由
      // // console.log(routerInit, 'routerInit')
      // const userRoutes = []
      // routerInit.forEach(item => {
      //   if (this.isExistInRouter(item)) {
      //     const childArr = []
      //     item.children.forEach(itemchildren => {
      //       // console.log(itemchildren)
      //       if (this.isExistInRouter(itemchildren)) {
      //         childArr.push(itemchildren)
      //       }
      //     })
      //     item.children = childArr
      //     userRoutes.push(item)
      //   }
      // })
      // this.userRoutes = userRoutes
      // // console.log(this.userRoutes, 'userRoutes')
      const routerInit = this.$router.options.routes
      const userRoutes = routerInit.filter(item => {
        return item.hidden === undefined && this.routerMapping.toString().indexOf(item.name) !== -1
      })
      // userRoutes 为当前角色对应的路由
      this.userRoutes = userRoutes
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
      // console.log(this.routerMapping)
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
}
</style>
