<template>
  <div>
    <el-form ref="form" label-width="80px">
  <el-form-item label="头像:">
    <img :src="GET_PHOTO" style="width:80px;height:80px;border-radius: 50%">
  </el-form-item>
  <el-form-item label="姓名:">
    <span>{{GET_NAME}}</span>
  </el-form-item>
  <el-form-item label="角色:">
    <span>{{GET_ROLE}}</span>
  </el-form-item>
  <el-form-item>
    <el-button @click="quit">退出</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data () {
    return {
    }
  },
  components: {},
  computed: {
    ...mapGetters(['GET_NAME', 'GET_ROLE', 'GET_PHOTO'])
  },
  created () {},
  mounted () {},
  destroyed () {},
  methods: {
    quit () {
      this.$router.push('/login')
      sessionStorage.clear() // 清空sessionstorage里面的所有数据
      window.location.reload() // 刷新vuex
    }
  }
}
</script>
