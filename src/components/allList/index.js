export default {
  name: 'all',
  computed: {
    todoList () {
      return this.$store.state.todoList
    }
  }
}
