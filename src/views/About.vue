<template>
  <div>
    about--{{this.$route.params.id}}--{{id}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      page: '',
      code: ''
    }
  },
  components: {},
  computed: {},
  created () {
    this.Getdata()
    this.Getdata2()
  },
  mounted () {},
  destroyed () {},
  methods: {
    Getdata () {
      this.page = this.$route.params.page
      this.code = this.$route.params.code
      console.log('page', this.page)
      console.log('code', this.code)
    },
    Getdata2 () {
      this.page = this.$route.query.page
      this.code = this.$route.query.code
      console.log('page--', this.page)
      console.log('code--', this.code)
    }
  }
}
</script>
