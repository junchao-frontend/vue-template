<template>
  <div class="container">
    <el-table
        :data="table_config.table_data"
        border
        stripe
        style="width: 100%">
        <el-table-column type="index" width="80" label="序号"></el-table-column>
        <template v-for="item in this.table_config.thead">
        <el-table-column v-if="item.type === 'button'" :key="item.prop" :prop="item.prop" :label="item.label">
            <template slot-scope="scope">
            <el-button size="mini" :type="scope.row.state == '启用' ? 'success' : 'danger'">{{scope.row.state}}</el-button>
            </template>
        </el-table-column>
        <el-table-column v-else :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
        </template>
        <el-table-column label="操作">
        <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
    </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="per_page"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalpage">
    </el-pagination>
  </div>
</template>

<script>
// import { gettableData } from '@/api/user.js'
export default {
  components: {},
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      table_config: {
        thead: [],
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
            loginName: '石平',
            power: 'api管理,角色管理',
            creatTime: '2021/10/17',
            manager: '代理商3',
            state: '启用'
          },
          {
            loginName: '刘沛申',
            power: 'api管理,权限管理',
            creatTime: '2021/10/18',
            manager: '代理商4',
            state: '禁用'
          },
          {
            loginName: '尹梦淞',
            power: '角色管理,权限管理',
            creatTime: '2021/10/19',
            manager: '代理商5',
            state: '启用'
          },
          {
            loginName: '周浩露',
            power: '账号管理,权限管理',
            creatTime: '2021/10/22',
            manager: '代理商6',
            state: '禁用'
          },
          {
            loginName: '张蓝宁',
            power: '角色管理,权限管理',
            creatTime: '2021/10/20',
            manager: '代理商7',
            state: '启用'
          },
          {
            loginName: '刘学彤',
            power: 'api管理,权限管理',
            creatTime: '2021/10/21',
            manager: '代理商8',
            state: '禁用'
          },
          {
            loginName: '曹旭',
            power: '账号管理,权限管理',
            creatTime: '2021/10/22',
            manager: '代理商9',
            state: '禁用'
          },
          {
            loginName: '赵浩男',
            power: '账号管理,权限管理',
            creatTime: '2021/10/22',
            manager: '代理商10',
            state: '启用'
          }
        ],
        url: ''
      },
      per_page: 40,
      totalpage: 400,
      page: 1
    }
  },
  watch: {
    config: {
      immediate: true,
      handler () {
        this.initData()
      }
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    initData () {
      for (const key in this.config) {
        if (Object.keys(this.table_config).includes(key)) {
          this.table_config[key] = this.config[key]
        }
      }
      this.loadtableData()
    },
    // loadtableData () {
    //   const requestData = {
    //     url: this.table_config.url
    //   }
    //   gettableData(requestData).then(res => {
    //     // console.log(res)
    //     const resData = res.data.data
    //     this.table_config.table_data = resData.tabledata
    //     // this.totalpage = resData.pagedata.totalpage
    //     // this.page = resData.pagedata.page
    //     // this.per_page = resData.pagedata.per_page
    //   })
    // },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange () {
      // this.loadtableData()
    }
  }
}
</script>

<style scoped>
</style>
