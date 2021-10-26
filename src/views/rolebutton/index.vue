<template>
  <div class="container">
<el-button v-permission = "{role:['1']}">管理员能看见</el-button>
    <el-button v-permission = "{role:['0']}">测试员能看见</el-button>
    <el-button v-permission = "{role:['1', '0']}">都能看见</el-button>
    <el-button v-disabled = "{effect:'disabled'}">禁用按钮</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
