<template>
  <div class="container">
    <h3>管理员可以看到, 测试员看不到</h3>
    <el-button @click="changeRole" size="small" type="primary">切换权限</el-button>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  data () {
    return {
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    changeRole () {
      const token = 'test'
      sessionStorage.setItem('token', token)
      const test = {
        account: 'test',
        password: 'test'
      }
      login(test).then(res => {
        const { name, photo, token } = res.data // 结构
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('name', name)
        sessionStorage.setItem('photo', photo)
        this.$store.commit('SET_NAME', name)
        this.$store.commit('SET_PHOTO', photo)
        this.$store.commit('SET_TOKEN', token)
        this.$store.dispatch('setMenuList') // 解析路由
        this.$router.push('/404')
        // location.reload()
      })
    }
  }
}
</script>

<style scoped>
</style>
