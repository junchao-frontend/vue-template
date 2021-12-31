<template>
  <div class="container">
    <div class="left">
      <div class="title">404 Not Found</div>
      <div class="info">
        <div class="info-top">I hava bad news for you</div>
        <div class="info-bottom">
          The page you are looking for might be removed or is temporarily
          unavailable
        </div>
      </div>
      <div class="button">
        <el-button @click="back" type="primary">BACK TO HOME</el-button>
      </div>
    </div>
    <div class="right">
      <img class="img" src="../assets/24.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    back () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  // width: 100vw;
  // height: 100vh;
  .left{
  .title {
    margin-top: 10%;
    margin-left: 10%;
    font-size: 20px;
    color: black;
    font-weight: 800;
  }
  .info {
    margin-left: 10%;
    margin-top: 25%;
    &-top {
      width: 400px;
      color: black;
      font-size: 50px;
      font-weight: 900;
    }
    &-bottom {
      margin-top: 7%;
      font-size: 18px;
      width: 370px;
      color: black;
    }
  }
  .button {
    margin-left: 10%;
    margin-top: 30%;
  }
  }
  .img {
    width: 65rem;
    height: 50rem;
  }
}
</style>
