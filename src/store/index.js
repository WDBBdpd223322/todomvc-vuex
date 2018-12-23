import Vue from 'vue'
import VuexStore from 'vuex'

Vue.use(VuexStore)

export default new VuexStore.Store({
  state: {
    title: 'todo-Vuex',
    todoList: []
  },
  getters: {
    toggleAll (state) {
      if (!state.length) return false
      return state.todoList.every(item => item.isFinish)
    }
  },
  mutations: {
    getTodoList (state) {
      state.todoList = JSON.parse(window.localStorage.getItem('todoList')) || []
    },
    addTodo (state, type) {
      state.todoList.push({
        id: state.todoList.length ? state.todoList.sort((a, b) => a.id - b.id)[state.todoList.length - 1]['id'] - 0 + 1 : 1,
        content: type,
        isFinish: false
      })
      window.localStorage.setItem('todoList', JSON.stringify(state.todoList))
    },
    delTodo (state, type) {
      state.todoList = state.todoList.filter(item => item.id !== type)
      window.localStorage.setItem('todoList', JSON.stringify(state.todoList))
    }
  }
})
