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
    ...mapMutations(['delTodo', 'changeState', 'updateTodo']),
    showEdit (item) {
      this.tmpInfo = JSON.parse(JSON.stringify(item))
    },
    cancleEdit () {
      this.tmpInfo = {}
    },
    saveEdit () {
      if (!this.tmpInfo.content.trim()) {
        this.delTodo(this.tmpInfo.id)
      } else {
        this.updateTodo([this.tmpInfo.id, this.tmpInfo.content.trim()])
      }
      this.tmpInfo = {}
    }
  },
  directives: {
    focus: {
      componentUpdated (el) {
        el.focus()
      }
    }
  }
}
