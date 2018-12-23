import { mapState, mapGetters } from 'vuex'
export default {
  name: 'section-html',
  data () {
    return {
      // title: 'todomv·vuex'
    }
  },
  computed: {
    ...mapState(['title', 'todoList']),
    ...mapGetters(['toggleAll']),
    activeTotal () {
      return this.todoList.filter(item => !item.isFinish).length
    }
  }
}
