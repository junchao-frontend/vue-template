<template>
  <div class="container">
    <div class="editbox">
      <el-input v-model="searchName" placeholder="名字"></el-input>
      <el-button type="primary" icon="el-icon-search" size="small" @click="search(searchName)">搜索</el-button>
      <el-button type="primary" icon="el-icon-edit" size="small" @click="addFormVisible = true">添加</el-button>
      <el-button type="primary" icon="el-icon-refresh" size="small" @click="react()">重置</el-button>
    </div>
    <el-checkbox-group class="checkbox" v-model="checkedTableColumns">
    <el-checkbox v-for="i in table_config.thead" :key="i.prop" :label="i.label">
      {{i.label}}
    </el-checkbox>
  </el-checkbox-group>
  <div class="table-box">
    <el-table
        :header-cell-style="{color:'#333',fontFamily:'MicrosoftYaHeiUI',fontSize:'14px',fontWeight:900,backgroundColor:'#f6f5ec'}"
        :row-style="{fontSize:'12px',color:'#666',fontFamily:'MicrosoftYaHeiUI'}"
        center
        v-loading="loading"
        :data="table_config.table_data"
        border
        stripe
        style="width: 100%;background:#e9eef3">
        <el-table-column type="index" width="150" label="序号"></el-table-column>
        <template v-for="item in Dynamicheader">
        <!-- <el-table-column v-if="item.type === 'button'" :key="item.prop" :prop="item.prop" :label="item.label">
            <template slot-scope="scope">
            <el-button size="mini" :type="scope.row.state == '启用' ? 'success' : 'danger'">{{scope.row.state}}</el-button>
            </template>
        </el-table-column> -->
        <el-table-column width="220" :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
        </template>
        <el-table-column width="200" label="操作">
        <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
        </template>
    </el-table-column>
    </el-table>
    </div>
    <div class="page">
    <el-pagination
      background
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-size="page.pageSize"
      layout="total,prev, pager, next"
      :total="total">
    </el-pagination>
    </div>
  <el-dialog class="dialog" title="Create" :visible.sync="addFormVisible" :modal="false">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.addr" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="form.age" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="生日" :label-width="formLabelWidth">
      <el-input v-model="form.birth" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser(form)">确 定</el-button>
  </div>
</el-dialog>
<el-dialog class="dialog" title="Update" :visible.sync="updateFormVisible" :modal="false">
  <el-form :model="updateForm">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="updateForm.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="updateForm.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="updateForm.addr" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" :label-width="formLabelWidth">
      <el-input v-model="updateForm.age" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="生日" :label-width="formLabelWidth">
      <el-input v-model="updateForm.birth" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="updateFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="upUser(updateForm)">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import {
  getUserList,
  createUser,
  searchUser,
  deleteUser,
  updateUser
} from '@/api/table' // 引入获取表单数据接口
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
      form: {
        name: '',
        email: '',
        addr: '',
        age: '',
        birth: ''
      },
      updateForm: {
        name: '',
        email: '',
        addr: '',
        age: '',
        birth: ''
      },
      updateFormVisible: false,
      addFormVisible: false,
      formLabelWidth: '100px',
      searchName: '',
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      loading: false,
      total: 50
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
    this.showTableData()
  },
  methods: {
    showTableData () {
      this.loading = true
      var params = this.page
      getUserList(params).then(res => {
        // console.log(res)
        this.table_config.table_data = res.data.data
        this.loading = false
        this.total = res.data.total
      })
    },
    addUser (newData) {
      this.addFormVisible = false
      createUser(newData).then(res => {
        this.showTableData()
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        this.form = {}
      }).catch(
        this.$message({
          message: '请输入正确格式的姓名',
          type: 'warning'
        })
      )
    },
    search (searchName) {
      searchUser(searchName).then(res => {
        this.showTableData()
      })
    },
    sizeChange (pagesize) {
      // console.log(`每页 ${val} 条`)
    },
    currentChange (currentPage) {
      this.page.pageIndex = currentPage
      this.showTableData()
    },
    handleEdit (row) {
      this.updateForm = row
      this.updateFormVisible = true
    },
    upUser (newInfo) {
      this.updateFormVisible = false
      updateUser(newInfo).then(res => {
        // console.log(res)
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.showTableData()
      })
    },
    handleDelete (row) {
      deleteUser(row.id).then(res => {
        // this.table_config.table_data = res.data
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.showTableData()
      })
    },
    react () {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox{
  margin-bottom: 18px;
  margin-left: 1px;
}
.editbox{
  // display: flex;
  margin-bottom: 25px;
  .el-input{
    margin-right: 20px;
    width: 180px;
    /deep/ .el-input__inner{
      height: 32px;
    }
  }
}
.table-box{
/deep/ .el-table th > .cell {
    text-align: center;
}
/deep/ .el-table .cell {
    text-align: center;
}
}
.page{
  margin-top: 15px;
}
/deep/ .el-dialog{
  width: 35%;
}
.dialog{
  .el-input{
    width: 250px;
  }
  // .el-form-item{
  //   margin: 20px auto;
  //   width: 400px;
  // }
}
</style>
