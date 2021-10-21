<template>
<el-button-group>
  <el-button v-for="(btn,index) in this.buttons" :key="index" :type="btn.type ? btn.type:'primary'"
   :icon="btn.icon" :size="btn.size?btn.size:'mini'" @click="btn.click">{{btn.label}}</el-button>
 </el-button-group>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'XxButton',
  data () {
    return {
    }
  },
  props: {
    buttons: {
      type: Array,
      required: true
    }
  },
  mounted () {},
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
</style>
