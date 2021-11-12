<template>
  <div class="login-container" ref="appRef">
    <div class="login-box">
      <div class="box-left">
        <div class="left-text">
          <div>
            <img src="../../assets/logo1.png" alt="">
          </div>
          <br>
          <div class="ceshi">
          <form class="form-container">
            <label for="fname">User Name</label><br>
            <el-input v-model="form.account"></el-input><br><br>
            <label for="lname">Password</label><br>
            <el-input v-model="form.password" show-password></el-input><br>
            <el-button type="danger" @click="onSubmit(form)">Log In</el-button><br>
            <div class="checkbox">
            <el-checkbox v-model="checked">Remember Me</el-checkbox>
            <span style="color:rgb(24, 109, 207)">Forgot Password?</span>
            </div>
            <hr style="marginTop:28px">
            <span class="lasttest" @click="dialogFormVisible = true">Register New User</span>
          </form>
          </div>
        </div>
      </div>
      <div class="box-right">
        <div class="right-text">
          <div class="textstyle">
          <strong>Welcome to Wjc-template</strong>
          <hr>
          <br>
          <span>
            Lorem ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 150s.
          </span>
          </div>
        </div>
      </div>
    </div>
  <el-dialog title="用户注册" :visible.sync="dialogFormVisible" class="dialog">
    <el-form :model="form">
      <el-form-item label="账号" :label-width="formLabelWidth">
        <el-input v-model="newuser.account" autocomplete="off" style="width:200px;margin-left:25px"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="newuser.password" autocomplete="off" style="width:200px;margin-left:25px"></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="newuser.name" autocomplete="off" style="width:200px;margin-left:25px"></el-input>
      </el-form-item>
      <el-form-item label="头像" :label-width="formLabelWidth">
        <el-input v-model="newuser.url" autocomplete="off" style="width:200px;margin-left:25px"></el-input>
      </el-form-item>
      <el-form-item label="角色" :label-width="formLabelWidth">
        <el-select v-model="newuser.role" placeholder="请选择权限" style="width:200px;margin-left:25px">
          <el-option label="一级权限" value="1"></el-option>
          <el-option label="二级权限" value="0"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="register(newuser)">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
// import { allRole } from '../../router/rolesFront'
import { login, registerUser } from '@/api/user'
// import { mixin } from 'vue/types/umd'
export default {
  // mixins: [drawMixin],
  data () {
    return {
      form: {
        account: 'wjc',
        password: '000919'
      },
      newuser: {
        account: '',
        password: '',
        name: '',
        url: '',
        role: ''
      },
      checked: true,
      dialogFormVisible: false,
      formLabelWidth: '60px'
    }
  },
  components: {},
  computed: {},
  created () {},
  mounted () {
    // this.showData()
  },
  destroyed () {},
  methods: {
    // onSubmit (form) {
    //   login(form).then(async res => {
    //     console.log(res)
    //     const token = res.data.token
    //     // 通过token调取获取角色数据的接口  之后把数据存入缓存
    //     await findUserByToken(token).then(res2 => {
    //       const userInfo = res2.data
    //       sessionStorage.setItem('role', userInfo.role)
    //       // console.log('sss')
    //       // console.log(res2, 'res2')
    //     })
    //     // console.log('bbb')
    //     sessionStorage.setItem('token', token) // 存入token
    //     this.$store.commit('SET_TOKEN', token)
    //     // var aaa = sessionStorage.getItem('tt', token)
    //     this.$router.push({
    //       path: '/home'
    //     })
    //   })
    // }
    register (aa) {
      console.log(aa)
      registerUser(aa).then(res => {
        // console.log(res)
        this.dialogFormVisible = false
      })
    },
    onSubmit (a) {
      login(a).then(res => {
        // console.log(res)
        if (res.data.code === 1000) {
          const userInfo = res.data.data
          const token = userInfo.token
          const roles = userInfo.role
          const name = userInfo.name
          const photo = userInfo.photo
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('roles', roles)
          // console.log(typeof roles)
          this.$store.commit('SET_NAME', name)
          this.$store.commit('SET_ROLE', roles)
          this.$store.commit('SET_PHOTO', photo)
          this.$store.commit('SET_TOKEN', token)
          this.$router.push('/home')
        } else {
          alert('抱歉,您输入的账号密码不存在,请重新输入')
        }
      })
      // console.log('外部函数')
    }
    // async onSubmit () {
    //   const res = await login()
    //   console.log(res)
    // }
  }
}
</script>
<style scoped>
.dialog{
  position: absolute;
  left: 24%;
  width: 900px;
  height: 1000px;
}
.login-container{
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(245, 246, 250);
  display: flex;
  align-items: center;
}
.login-container::before{
        content: "";  /*:before和:after必带技能，重要性为满5颗星*/
        display: block;
        position: absolute;  /*日常绝对定位*/
        top: 0;
        bottom: 0;
        left: 50%;
        right: 0;
        background: rgb(28, 59, 105);
}
.login-box{
        box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.45);
        /* -webkit-box-shadow: 0 12px 5px -10px rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1); */
        z-index: 10;
        /* justify-content: center; */
        width: 1250px;
        height: 650px;
        margin: 0 auto;
        background-color: rgb(245, 194, 128);
        display: flex;
}
.box-left{
        flex: 1;
        height: 100%;
        background-color:rgb(245, 246, 250) ;
}
.box-right{
        flex: 1;
        height: 100%;
        background-color:rgb(28, 59, 105) ;
        background: url('../../assets/box.jpg') no-repeat 0% 20%/ cover;
        /* background-repeat: no-repeat;
        background-size:cover; */
        background-position: 40% 0;
}
.right-text{
  display: flex;
  align-items: center;
  height: 100%;
  color:white;
  font-size: 20px;
  background-color: rgba(40, 70, 110,0.7);
}
.textstyle{
  margin-left: 20px;
  padding: 12px;
}
.left-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.form-container{
  font-size: 15px;
  color: rgb(103, 103, 104);
  padding: 22px;
  width: 300px;
  height: 320px;
  background-color: rgba(255, 255, 255);
}
>>>.el-input__inner {
    margin-top: 6px;
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 32px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.el-button--danger {
    margin-top: 18px;
    line-height: 10px;
    color: #FFF;
    background-color: #F56C6C;
    border-color: #F56C6C;
    width: 300px;
    height: 34px;
}
.checkbox{
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.lasttest{
  cursor: pointer;
  display: inline-block;
  margin-top: 30px;
  margin-left: 80px;
  color:rgb(24, 109, 207)
}
</style>
