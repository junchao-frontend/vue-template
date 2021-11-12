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
        :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span style="padding-left: 15px">{{ item.meta.title }}</span>
        </template>
        <div v-for="child in item.children" :key="child.index" >
          <!-- 先判断二级菜单有没有children 没有的话直接渲染 -->
        <el-menu-item v-if="!child.children" :index="child.path">
          <span style="padding-left: 15px">{{child.meta.title}}</span>
        </el-menu-item>
        <!-- 如果有三级菜单则用submenu -->
        <el-submenu v-else :index='child.path'>
          <template slot="title">
          <span style="padding-left: 15px">{{ child.meta.title }}</span>
        </template>
        <el-menu-item v-for="i in child.children" :key="i.name" :index="i.path">
          <span style="padding-left: 15px">{{i.meta.title}}</span>
        </el-menu-item>
        </el-submenu>
        <!-- ----- -->
        </div>
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
    initRouter () {
      const routerInit = this.$router.options.routes // 获取所有路由
      // console.log(routerInit, 'routerInit')
      const userRoutes = []
      routerInit.forEach(item => {
        if (this.isExistInRouter(item)) {
          const childArr = []
          item.children.forEach(itemchildren => {
            // console.log(itemchildren)
            if (this.isExistInRouter(itemchildren)) {
              childArr.push(itemchildren)
            }
          })
          item.children = childArr
          userRoutes.push(item)
        }
      })
      this.userRoutes = userRoutes
      console.log(this.userRoutes, 'userRoutes')
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
