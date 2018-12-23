import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'section-html',
  data () {
    return {
      newTodoText: ''
    }
  },
  methods: {
    addTodo () {
      if (this.newTodoText.trim()) {
        this.$store.commit('addTodo', this.newTodoText.trim())
      } else {
        window.alert('请输入您想添加的 todo')
      }
      this.newTodoText = ''
    },
    ...mapMutations(['changeStateAll', 'delAll'])
  },
  computed: {
    ...mapState(['title', 'todoList']),
    ...mapGetters(['toggleAll']),
    activeTotal () {
      return this.todoList.filter(item => !item.isFinish).length
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
