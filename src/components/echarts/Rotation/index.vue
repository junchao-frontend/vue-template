<template>
  <div class="container">
      <div class="rotation">
          <dv-scroll-board :config="config" style="color:black" />
      </div>
  </div>
</template>

<script>
import schoolData from '../Rotation/schoolData.json'
export default {
  components: {},
  data () {
    return {
      config: {
        data: [],
        waitTime: 1500,
        align: ['center'],
        header: ['楼号', '教学楼名称', '学生数量'],
        indexHeader: '序号',
        columnWidth: [120],
        headerBGC: 'rgb(64,201,198)', // 表头背景色
        oddRowBGC: '#FFF', // 奇数行背景色
        evenRowBGC: '#f5f5f5' // 偶数行背景色
      }
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      const data = schoolData.data
      const arr = []
      for (const i in data) {
        const number = data[i].number
        const name = data[i].name
        const people = data[i].people
        arr.push([number, name, people])
      }
      const newarr = []
      for (var i = 0; i < arr.length; i++) {
        newarr.unshift(arr[i])
      }
      //   console.log(newarr)
      this.config.data = newarr
    }
  }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.rotation{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
