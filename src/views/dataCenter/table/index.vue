<template>
  <div class="container">
    <!-- <div class="date_container">
    <filterPane :filterData='filterData' />
    </div> -->
    <el-button @click="addData">增加</el-button>
    <el-button @click="test1">--</el-button>
    <div class="table_container">
    <tablePane :table_config='table_config' />
    </div>
  </div>
</template>
<script>
// import filterPane from '@/components/filterPane/index.vue'
import tablePane from '@/components/tablePane/index.vue'
import { addTabeldata, showTabeldata } from '../../../api/tabel'
console.log('--')
export default {
  data () {
    return {
      checkList: [],
      test: {
        loginName: 'taest',
        power: '21a3',
        creatTime: '3a3',
        manager: '413'
      },
      filterData: {
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
            label: '登录账号', prop: 'loginName', show: true
          },
          {
            label: '权限', prop: 'power', show: true
          },
          {
            label: '激活时间', prop: 'creatTime', show: true
          },
          {
            label: '管理员', prop: 'manager', show: true
          }
        ],
        table_data: [],
        url: '/tabledata'
      }
    }
  },
  components: {
    // filterPane,
    tablePane
  },
  computed: {},
  created () {},
  mounted () {
    this.initData()
  },
  destroyed () {},
  methods: {
    addData () {
      addTabeldata(this.test).then(res => {
        // console.log(res)
        this.initData()
      })
    },
    initData () {
      showTabeldata().then(res => {
        // console.log(res)
        this.table_config.table_data = res.data
      })
    },
    test1 () {
      var a = () => {
        console.log(this)
      }
      a()
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
  background-color: #e9eef3;
  margin-left: 23px;
  margin-top: 30px;
}

</style>
