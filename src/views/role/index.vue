<template>
  <div class="app-container">

    <el-table
    :header-cell-style="{color:'black',fontFamily:'MicrosoftYaHeiUI',fontSize:'14px',fontWeight:900}"
    :data="tableData"
    style="width: 100%;margin-top:30px;box-sizing: border-box" border>
      <el-table-column align="center" prop="name" label="Role Key" width="250">
      </el-table-column>
      <el-table-column align="center" prop="role" label="Role Name" >
      </el-table-column>
      <el-table-column align="header-center" prop="description" label="Description" >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        name: '管理员',
        role: 'admin',
        description: 'Admin can see all pages'
      }, {
        name: '测试员',
        role: 'test',
        description: 'The permission page is not visible'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
