import { mapMutations } from 'vuex'
export default {
  name: 'all',
  computed: {
    todoList () {
      return this.$store.state.todoList
    }
  },
  methods: {
    ...mapMutations(['delTodo', 'changeState'])
  }
}
