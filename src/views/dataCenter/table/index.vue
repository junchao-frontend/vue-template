<template>
  <div class="container">
    <div class="table_container">
    <tablePane :table_config='table_config' />
    </div>
  </div>
</template>
<script>
import tablePane from '@/components/tablePane/index.vue'
export default {
  data () {
    return {
      table_config: {
        thead: [
          {
            label: '姓名', prop: 'name', show: true
          },
          {
            label: '邮箱', prop: 'email', show: true
          },
          {
            label: '地址', prop: 'addr', show: true
          },
          {
            label: '年龄', prop: 'age', show: true
          },
          {
            label: '生日', prop: 'birth', show: true
          }
        ], // 表单表头数据
        table_data: [], // 表单数据
        url: '/user/showdata' // 获取表单数据URL
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
  },
  destroyed () {},
  methods: {
  }
}
</script>
<style scoped>
.container{
  padding: 2px;
  background: white;
}
</style>
