<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" class="loginform">
      <br>
      <br>
  <el-form-item label="账号">
    <el-input v-model="login.name"></el-input>
  </el-form-item>
   <el-form-item label="密码">
    <el-input v-model="login.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button>注册</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {

  data () {
    return {
      login: {
        name: '',
        password: ''
      }
    }
  },

  components: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {},
  methods: {
    onSubmit () {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
.login-container{
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0H120154Q6%2F200H1154Q6-4-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634994326&t=705f2f71ddebe699176644f36e6e4378');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.loginform{
  width: 400px;
  height: 250px;
  border: 1px solid red;
  background-color: rgb(255, 255, 255);
  opacity: 0.8;
  box-shadow: 5px 5px 10px rgb(156, 154, 154);
}
</style>
