<template>
  <div class="people">
    <el-form ref="form" label-width="80px">
  <el-form-item label="头像:">
    <img @click="updatePhoto()" :src="GET_PHOTO" style="width:80px;height:80px;border-radius: 50%;cursor: pointer">
  </el-form-item>
    <el-form-item label="姓名:">
    <span>王军潮</span>
  </el-form-item>
  <el-form-item label="手机号:">
    <span>15533570808</span>
  </el-form-item>
  <el-form-item label="当前权限:">
    <span>{{GET_NAME}}</span>
  </el-form-item>
  <el-form-item>
    <el-button style="margin-left:20px;margin-top:30px" @click="quit" type="primary" size="small">退出登录</el-button>
  </el-form-item>
</el-form>
<el-dialog class="dialog" title="更换头像" :visible.sync="updateAvator" :modal-append-to-body="false" >
  <el-upload
      :on-success="ToUpload"
      :on-error="uploadError"
      :before-upload="beforeAvatarUpload"
      class="upload-demo"
      drag
      action="http://49.232.18.137:7001/api/user/upload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
    </el-upload>
  </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      updateAvator: false
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
    ...mapGetters(['GET_NAME', 'GET_PHOTO'])
  },
  methods: {
    quit () {
      this.$router.push('/login')
      this.$message.success('退出成功')
      window.location.reload() // 刷新vuex
      sessionStorage.clear() // 清空sessionstorage里面的所有数据
    },
    updatePhoto () {
      this.updateAvator = true
    },
    ToUpload (response, file) {
      console.log(file, 'success')
      var newPhoto = 'http://49.232.18.137:9000/chao/' + file.name
      this.$store.commit('SET_PHOTO', newPhoto)
      sessionStorage.setItem('photo', newPhoto)
      this.updateAvator = false
      this.$message.success('更新成功')
    },
    uploadError (err, file, fileList) {
      console.log(err, file, fileList, 'error')
    },
    beforeAvatarUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 1
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-form-item{
    font-weight: 600;
    margin-bottom: 45px;
}
/deep/ .el-form-item__label{
    margin-right: 20px;
}
.people{
  /* width: 300px; */
  height: 600px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 30px;
  background-color: white;
}
/deep/ .el-dialog{
  width: 35%;
}
/deep/ .el-dialog__header{
    background: #409eff;
    .el-dialog__title{
      color: rgb(255, 255, 255);
      font-size: 15px;
    }
}
</style>
