export default {
  name: 'active',
  computed: {
    todoList () {
      return this.$store.state.todoList.filter(item => !item.isFinish)
    }
  }
}
