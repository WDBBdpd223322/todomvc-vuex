export default {
  name: 'section-html',
  data () {
    return {
      // title: 'todomv·vuex'
    }
  },
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
