<template>
  <div class="container">
  <el-breadcrumb separator="/">
    <!-- <el-breadcrumb-item :to="{ path: '/home' }">Dashboard</el-breadcrumb-item> -->
    <el-breadcrumb-item class="el-bread-one" v-for="item in breadList" :key="item.path">
        <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      breadList: []
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.getList()
  },
  watch: {
    $route () {
      this.getList()
    }
  },
  methods: {
    getList () {
      var breadList = this.$route.matched.filter(item => item.meta.title)
      // console.log(breadList)
      const first = breadList[0]
      if (first && first.path !== '/homeF') {
        breadList = [{ path: '/homeF', meta: { title: 'Dashboard' } }].concat(breadList)
      }
      this.breadList = breadList
      // console.log(this.breadList)
    }
  }
}
</script>

<style scoped>
.el-bread-one>>>.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    font-weight: 400;
    font-size: 14px;
    color: #8b9baf;
  }
  .el-bread-one>>>.el-breadcrumb__item:last-child
  .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child
  .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child
  .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child
  .el-breadcrumb__inner:hover{
    font-weight: 800;
    font-size: 14px;
    color: #000;
  }
</style>
