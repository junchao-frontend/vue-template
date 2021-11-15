<template>
  <div class="container">
    <!-- <div class="date_container">
    <filterPane :filterData='filterData' />
    </div> -->
    <div class="table_container">
    <tablePane :table_config='table_config' />
    </div>
  </div>
</template>

<script>
// import filterPane from '@/components/filterPane/index.vue'
import tablePane from '@/components/tablePane/index.vue'
export default {
  data () {
    return {
      checkList: [],
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
        table_data: [
          {
            loginName: '王军潮',
            power: 'api管理,角色管理',
            creatTime: '2021/10/15',
            manager: '代理商1',
            state: '启用'
          },
          {
            loginName: '于森',
            power: 'api管理,账号管理',
            creatTime: '2021/10/16',
            manager: '代理商2',
            state: '禁用'
          },
          {
            loginName: '陈阳',
            power: 'api管理,角色管理',
            creatTime: '2021/10/17',
            manager: '代理商3',
            state: '启用'
          }
        ],
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
  mounted () {},
  destroyed () {},
  methods: {}
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
