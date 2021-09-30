<template>
  <div class="container">
    <el-button v-permission = "{role:['admin']}">管理员能看见</el-button>
    <el-button v-permission = "{role:['student']}">学生能看见</el-button>
    <el-button v-permission = "{role:['admin', 'student']}">都能看见</el-button>
    <el-button v-disabled = "{effect:'disabled'}">禁用按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  created () {},
  mounted () {
  },
  destroyed () {},
  methods: {}
}
</script>
