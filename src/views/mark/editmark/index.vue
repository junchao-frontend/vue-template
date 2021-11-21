<template>
  <div class="container">
      编辑Markdown
      <mavon-editor
      @save="save"
      @change="change"
      v-model="value"/>
      <el-button class="editor-btn" type="primary" @click="submit"
        >提交</el-button
      >
      <el-button class="editor-btn" type="primary" @click="save"
        >save</el-button
      >
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      value: '',
      defaultData: 'preview'
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    change (value, render) {
      // render 为 markdown 解析后的结果
      this.html = render
      // console.log(render)
    },
    save (value, render) {
      // console.log(value)
      console.log(render)
    },
    submit () {
    //   console.log(this.value)
      console.log(this.html)
      // this.$message.success('提交成功！')
    }
  }
}
</script>

<style scoped>
</style>
