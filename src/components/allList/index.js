export default {
  name: 'all',
  computed: {
    todoList () {
      return this.$store.state.todoList
    }
  },
  methods: {
    delTodo (id) {
      this.$store.commit('delTodo', id)
    },
    changeState (id) {
      this.$store.commit('changeState', id)
    }
  }
}
