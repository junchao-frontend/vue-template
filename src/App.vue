<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created () {
    /**
     * 获取路由
     */
    this.$store.dispatch('setMenuList')
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
