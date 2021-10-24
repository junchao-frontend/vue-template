<template>
  <div class="container">
    <div class="date_container">
    <filterPane :filterData='filterData' />
    </div>
    <div class="table_container">
    <tablePane :config='table_config' />
    </div>
  </div>
</template>

<script>
import filterPane from '@/components/filterPane/index.vue'
import tablePane from '@/components/tablePane/index.vue'
export default {

  data () {
    return {
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
