<template>
  <div ref="appRef">
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
    <!-- <xx-button :buttons="this.buttons"></xx-button> -->
  </el-form-item>
  <!-- <el-button v-permission = "{role:['admin']}">管理员能看见</el-button>
    <el-button v-permission = "{role:['student']}">学生能看见</el-button>
    <el-button v-permission = "{role:['admin', 'student']}">都能看见</el-button>
    <el-button v-disabled = "{effect:'disabled'}">禁用按钮</el-button> -->
</el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import XxButton from '../../components/XxButton.vue'
// import { drawMixin } from '../../utils/testMixin'
export default {
  // mixins: [drawMixin],
  data () {
    return {
      buttons: [
        {
          label: '创建',
          icon: 'el-icon-circle-plus-outline',
          click: this.add
        },
        {
          label: '修改',
          icon: 'el-icon-edit-outline',
          click: this.update
        }
      ]
    }
  },
  // components: { XxButton },
  computed: {
    ...mapGetters(['GET_NAME', 'GET_ROLE', 'GET_PHOTO'])
  },
  created () {
  },
  mounted () {
  },
  destroyed () {},
  methods: {
    quit () {
      this.$router.push('/login')
      sessionStorage.clear() // 清空sessionstorage里面的所有数据
      window.location.reload() // 刷新vuex
    },
    add () {
      console.log('add')
    },
    update () {
      console.log('update')
    }
  }
}
</script>
