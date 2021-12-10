<template>
  <div class="container">
    <el-upload
      :on-success="ToUpload"
      :on-error="uploadError"
      :before-upload="beforeAvatarUpload"
      class="upload-demo"
      drag
      action="http://49.232.18.137:7001/api/user/upload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div>
      <img class="img" v-for="(item,index) in imgUrl" :key="index" :src="item">
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
      console.log(file, 'file')
    }
  }
}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>
