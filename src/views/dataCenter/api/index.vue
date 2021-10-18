<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      action=''
      :on-change="upToCHV"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="image" :src="image" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
// import axios from 'axios'
// import { getPhoto } from '@/api/user'
// axios.defaults.headers = {
//   'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 设置完以后 传入的params对象就会时候用formdata传参的方式
// }
export default {
  data () {
    return {
      image: '',
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 设置完以后 传入的params对象就会时候用formdata传参的方式
      }
    }
  },
  created () {
    // this.showdata()
  },
  methods: {
    handleAvatarSuccess (res, file) {
      console.log(res, 'res')
      // this.image = URL.createObjectURL(file.raw)
      // var formData = new FormData()
      // formData.append('image', file)
      // // console.log('res', res)
      // console.log('file', file)
      // console.log('formData', formData)
      // console.log(this.image, 'this.image')
      // getPhoto(
      //   formData
      // ).then(res => {
      //   console.log('res', res)
      // })
    },
    beforeAvatarUpload (file) {
      // console.log(file, 'file')
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // changeHandle (el) {
    //   // console.log(el, 'el')
    //   this.image = el.raw
    //   console.log(el)
    //   const formData = new FormData()
    //   formData.append('image', this.image)
    //   this.$axios({
    //     method: 'post',
    //     url: 'http://152.136.115.31:9099/predict',
    //     data: formData,
    //     headers: {
    //       'content-type': 'multipart/form-data'
    //     }
    //   }).then(res => {
    //     console.log(res)
    //   })
    // }
    upToCHV (el) {
      console.log('upToCHV')
      console.log(el.raw, 'raw')
      const formData = new FormData()
      formData.append('image', el.raw)
      console.log('data', formData)
      this.$axios.post('http://152.136.115.31:9099/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res, 'res')
        this.payload = res.data.result.addr
        console.log(res.data.result.addr)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
