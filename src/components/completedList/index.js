export default {
  name: 'completed',
  computed: {
    todoList () {
      return this.$store.state.todoList.filter(item => item.isFinish)
    }
  }
}
