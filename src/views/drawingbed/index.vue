<template>
  <div class="container">
    <div class="upload">
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
    </div>
    <div class="show-img">
      <el-image
      v-for="(item,index) in imgUrl" :key="index"
      :src="item"
      style="width: 100px; height: 100px;margin: 0 40px 30px 0"
      fit="contain">
      <div slot="placeholder">
        加载中<span class="dot">...</span>
      </div>
      </el-image>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data () {
    // const token = sessionStorage.getItem('token')
    return {
      imgUrl: []
    }
  },
  computed: {
  },
  created () {},
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      axios.get('http://49.232.18.137:7001/api/user/showImg').then(res => {
        const imgUrl = res.data.data.imgdata.map(i => {
          return 'http://49.232.18.137:9000/chao/' + i.name
        })
        // console.log(imgUrl)
        this.imgUrl = imgUrl
      })
    },
    ToUpload (response, file) {
      console.log(file, 'success')
      this.initData()
    },
    uploadError (err, file, fileList) {
      console.log(err, file, fileList, 'error')
    },
    beforeAvatarUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isLt2M
    }
  }
}
</script>

<style scoped>
.upload{
  /* background-color: white; */
  margin: 0 2%;
  /* padding: 2%; */
}
.show-img{
  background-color: rgb(255,255,255,.5);
  border-radius: 15px;
  margin: 3% 2%;
  padding: 2%;
}
</style>
