import { mapMutations } from 'vuex'
export default {
  name: 'active',
  beforeMount () {
    if (!this.todoList.length) {
      setTimeout(() => {
        this.$router.push('/all')
      }, 1000)
    }
  },
  data () {
    return {
      tmpInfo: {}
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
  },
  computed: {
    todoList () {
      return this.$store.state.todoList.filter(item => !item.isFinish)
    }
  }
}
