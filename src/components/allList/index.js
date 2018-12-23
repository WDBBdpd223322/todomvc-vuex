import { mapMutations } from 'vuex'
export default {
  name: 'all',
  data () {
    return {
      tmpInfo: {}
    }
  },
  computed: {
    todoList () {
      return this.$store.state.todoList
    }
  },
  methods: {
    ...mapMutations(['delTodo', 'changeState']),
    showEdit (item) {
      this.tmpInfo = JSON.parse(JSON.stringify(item))
    }
  }
}
