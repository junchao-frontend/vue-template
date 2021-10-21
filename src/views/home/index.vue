<template>
  <div class="container">
    <div class="date_container">
    <filterPane :filterData='filterData1' />
    </div>
    <!-- <el-button v-permission = "{role:['admin']}">管理员能看见</el-button>
    <el-button v-permission = "{role:['student']}">学生能看见</el-button>
    <el-button v-permission = "{role:['admin', 'student']}">都能看见</el-button>
    <el-button v-disabled = "{effect:'disabled'}">禁用按钮</el-button> -->
    <div class="table_container">
    <tablePane :config='table_config' />
    </div>
  </div>
</template>

<script>
import filterPane from '@/components/filterPane/index.vue'
import tablePane from '@/components/tablePane/index.vue'
export default {
  name: 'HomeIndex',
  data () {
    return {
      filterData1: {
        timeSelect: true,
        inputData: '',
        selectData: '',
        elinput: [
          {
            name: '姓名'
          }
        ],
        elselect: [
          {
            name: '部门',
            option: [
              {
                key: 0,
                value: '技术部'
              },
              {
                key: 1,
                value: '督查部'
              }
            ]
          }
        ]
      },
      table_config: {
        thead: [
          {
            label: '登录账号', prop: 'loginName'
          },
          {
            label: '权限', prop: 'power'
          },
          {
            label: '激活时间', prop: 'creatTime'
          },
          {
            label: '管理员', prop: 'manager'
          },
          {
            label: '状态',
            prop: 'state',
            type: 'button'
          }
        ],
        url: '/tabledata'
      }
    }
  },
  components: {
    filterPane,
    tablePane
  },
  computed: {},
  created () {},
  mounted () {
  },
  destroyed () {},
  methods: {
    filterData () {
    }
  }
}
</script>
<style scoped>
.date_container{
  margin-left: 12px;
  margin-top: 30px;
}
.table_container{
  margin-left: 23px;
  margin-top: 30px;
}
</style>
