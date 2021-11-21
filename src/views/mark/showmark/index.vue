<template>
  <div class="container">
      展示本地Markdown
      <mavon-editor
            :value="test"
            defaultOpen="preview"
            :boxShadow="false"
            style="z-index:1;height:100%"
            :editable="false"
            :subfield="false"
            :toolbarsFlag="false"
          >
          </mavon-editor>
  </div>
</template>

<script>
import { test } from './test'
// console.log(test)
export default {
  components: {},
  data () {
    return {
      test: test
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
