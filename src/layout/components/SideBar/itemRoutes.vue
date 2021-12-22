<template>
  <div class="container">
      <template
      v-for="(item, index) in userRoutes"
      >
      <!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况
        情况一：有子集的情况：                         -->
        <el-submenu v-if="item.children.length > 1" :key="index" :index="item.path">
            <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
            </template>
            <itemRoute :routerData = "item.children"></itemRoute>
        </el-submenu>
        <!-- 情况二：没子集的情况： -->
      <el-menu-item :key="index" v-else :index="item.meta.path" >
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      </template>
  </div>
</template>

<script>
export default {
  name: 'itemRoute',
  components: {},
  props: ['routerData'],
  data () {
    return {
      userRoutes: []
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.userRoutes = this.routerData
  },
  methods: {}
}
</script>

<style scoped>
</style>
