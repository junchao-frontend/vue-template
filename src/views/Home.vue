<template>
  <div>
    <!-- params跳转刷新页面数据丢失，query不会丢失 -->
    <button @click="Tonewpage()">params跳转</button>
    <button @click="Tonewpage2()">query跳转2</button>
    <button @click="Tonewpage3()">跳转3</button><br>
    {{this.$store.state.count}}
    <button @click="countup()">++</button>
    <button @click="countdown()">--</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  data () {
    return {
      page: 'www',
      code: '7895'
    }
  },
  components: {},
  computed: {
    ...mapState(['count'])
  },
  created () {
    console.log(this.count)
  },
  mounted () {},
  destroyed () {},
  methods: {
    Tonewpage () {
      this.$router.push({
        name: 'About',
        params: {
          page: this.page,
          code: this.code
        }
      })
    },
    Tonewpage2 () {
      this.$router.push({
        name: 'About',
        query: {
          page: '1',
          code: '9999'
        }
      })
    },
    Tonewpage3 () {
      this.$router.push({
        path: 'About/12',
        props: ['id']
      })
    },
    countup () {
      this.$store.commit('upcount')
    },
    countdown () {
      this.$store.commit('downcount')
    }
  }
}
</script>
