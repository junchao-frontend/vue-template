<template>
  <div class="container">
    <!-- <el-date-picker
      v-if="filterData.timeSelect"
      v-model="dateRange"
      style="width: 300px"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
      class="filter-item"
    /> -->
    <template v-if="filterData.elinput">
      <el-input
        class="filter-item"
        v-for="(item, index) in filterData.elinput"
        :key="index"
        v-model="filterData.inputData"
        :placeholder="item.name"
        :style="{ width: item.width ? item.width + 'px' : '200px' }"
      />
    </template>
    <template v-if="filterData.elselect">
      <el-select
        class="filter-item"
        v-for="(item, index) in filterData.elselect"
        :key="index + '1'"
        v-model="filterData.selectData"
        :placeholder="item.name"
        clearable
        :style="{ width: item.width ? item.width + 'px' : '90px' }"
      >
        <el-option
          v-for="i in item.option"
          :key="i.value"
          :label="i.label"
          :value="i.value"
        />
      </el-select>
    </template>
    <div class="btn">
      <el-button class="filter-item" type="primary" @click="handleSearch">
        搜索
      </el-button>
      <el-button class="filter-item" type="warning" @click="handleRest">
        重置
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    filterData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      dateRange: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  computed: {},
  created () {},
  mounted () {
  },
  methods: {
    handleSearch () {
      console.log('搜索')
    },
    handleRest () {
      console.log('重置')
    }
  },
  watch: {
    filterData: {
      immediate: true,
      handler (newvalue) {
        // console.log(newvalue)
      }
    }
  }
}
</script>

<style scoped>
.filter-item {
  margin-left: 10px;
  display: inline-block;
}
.btn {
  display: inline-block;
  margin-left: 10px;
}
</style>
