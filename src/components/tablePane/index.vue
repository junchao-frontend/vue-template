<template>
  <div class="container">
    <el-checkbox-group class="checkbox" v-model="checkedTableColumns">
    <el-checkbox v-for="i in table_config.thead" :key="i.prop" :label="i.label">
      {{i.label}}
    </el-checkbox>
  </el-checkbox-group>
    <el-table
        :data="table_config.table_data"
        border
        stripe
        style="width: 100%">
        <el-table-column type="index" width="80" label="序号"></el-table-column>
        <template v-for="item in Dynamicheader">
        <!-- <el-table-column v-if="item.type === 'button'" :key="item.prop" :prop="item.prop" :label="item.label">
            <template slot-scope="scope">
            <el-button size="mini" :type="scope.row.state == '启用' ? 'success' : 'danger'">{{scope.row.state}}</el-button>
            </template>
        </el-table-column> -->
        <el-table-column  :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
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
export default {
  components: {},
  props: {
    table_config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      per_page: 40,
      totalpage: 400,
      page: 1
    }
  },
  watch: {
  },
  computed: {
    Dynamicheader () {
      return this.table_config.thead.filter((item) => item.show)
    },
    checkedTableColumns: {
      get () {
        // 返回选中的列名
        return this.Dynamicheader.map(column => column.label)
      },
      set (checked) {
        // 设置表格列的显示与隐藏
        // console.log(checked)
        this.table_config.thead.forEach((column, index) => {
          // console.log(coulumn)
          // 如果选中，则设置列显示
          if (checked.includes(column.label)) {
            column.show = true
          } else {
            // 如果未选中，则设置列隐藏
            column.show = false
          }
        })
      }
    }
  },
  created () {},
  mounted () {
    // console.log(this.config)
  },
  methods: {
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
.checkbox{
  margin-bottom: 15px;
  margin-left: 1px;
}
</style>
