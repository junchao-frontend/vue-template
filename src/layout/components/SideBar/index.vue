<template>
  <el-menu
    default-active="$route.path"
    class="menu"
    router
    background-color="#0E1629"
    text-color="#fff"
    :collapse-transition="false"
    :collapse="false"
    active-text-color="#ffd04b"
  >
    <div v-for="item in allRouters" :key="item.index">
      <!-- 渲染没有一级菜单 而且没有设置hidden属性 -->
      <el-menu-item
        v-if="item.children === undefined && !item.hidden"
        :index="item.path"
      >
        <i :class="item.meta.icon" />
        <span style="padding-left: 15px">{{ item.meta.title }}</span>
      </el-menu-item>
      <!-- 渲染只有一个一级菜单的路由 -->
      <el-menu-item
        v-if="item.children && item.children.length === 1"
        :index="item.path"
      >
        <i :class="item.meta.icon"></i>
        <span style="padding-left: 15px">{{ item.meta.title }}</span>
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
          <!-- <template slot="title">
            <span>{{children.meta.title}}</span>
          </template> -->
          </el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
export default {

  data () {
    return {
      allRouters: [],
      childArr: [],
      num: '56456'
    }
  },
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
    // initRouter () {
    //   const allRoutes = this.$router.options.routes
    //   this.allRouters = allRoutes
    //   allRoutes.forEach(item => { // 遍历全部路由
    //     // const child = [] // 定义空数组 存储子路由
    //     // console.log(item.children)
    //     if (item.children) {
    //       item.children.forEach(i => {
    //         // console.log(i)
    //         if (i.meta) {
    //           console.log(i)
    //           this.childArr.push(i)
    //         }
    //       })
    //     }
    //     // if (item.children.length === 3) {
    //     //   console.log(item)
    //     // }
    //   })
    // },
    showdata () {
      // 定义一个空数组allRouters 获取全部路由
      const allRouters = this.$router.options.routes
      this.allRouters = allRouters
      // if (allRouters[0].hidden) {
      //   console.log(allRouters[0].hidden)
      // }
      const childArr = [] // 定义储存子路由的数组
      // 遍历所有路由，通过有没有hidden 渲染展示的侧边栏
      allRouters.forEach((item) => {
        if (item.children && item.children.length > 1) {
          item.children.forEach(i => {
            childArr.push(i)
          })
        }
        // if (this.routerFilter(item) && item.children && item.children.length > 1) {
        //   item.children.forEach(item => {
        //     childArr.push(item)
        //   })
        // }
        // item.children = childArr
        // console.log(item, 'item')
      })
      this.childArr = childArr
      // console.log(this.childArr, 'childArr')
      // console.log(sideBar, '---------')
      // console.log(allRouters, 'allRouters')
    },
    routerFilter (item) {
      // 这个函数用来筛选一下路由 筛选出没有设置hidden的路由
      return !(item.hidden)
    }
    // ceshi () {
    //   this.childArr.forEach(item => {
    //     console.log(item)
    //     // item.forEach(i => {
    //     //   console.log(i)
    //     // })
    //   })
    // }
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
