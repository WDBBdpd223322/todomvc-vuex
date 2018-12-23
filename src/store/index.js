import Vue from 'vue'
import VuexStore from 'vuex'
import Local from '@/assets/js/index.js'
Vue.use(VuexStore)

export default new VuexStore.Store({
  state: {
    title: 'todo-Vuex',
    todoList: []
  },
  getters: {
    toggleAll (state) {
      if (!state.todoList.length) return false
      return state.todoList.every(item => item.isFinish)
    }
  },
  mutations: {
    getTodoList (state) {
      state.todoList = Local.getList()
    },
    addTodo (state, type) {
      state.todoList.push({
        id: state.todoList.length ? state.todoList.sort((a, b) => a.id - b.id)[state.todoList.length - 1]['id'] - 0 + 1 : 1,
        content: type,
        isFinish: false
      })
      Local.setList(state.todoList)
    },
    delTodo (state, type) {
      state.todoList = state.todoList.filter(item => item.id !== type)
      Local.setList(state.todoList)
    },
    changeState (state, id) {
      state.todoList.forEach(item => {
        if (item.id === id) item.isFinish = !item.isFinish
      })
      Local.setList(state.todoList)
    }
  }
})
