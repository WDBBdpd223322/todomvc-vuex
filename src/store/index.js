import Vue from 'vue'
import VuexStore from 'vuex'

Vue.use(VuexStore)

const todoList = [
  {
    id: 1,
    content: '吃饭',
    isFinish: true
  },
  {
    id: 2,
    content: '睡觉',
    isFinish: true
  },
  {
    id: 3,
    content: '打豆豆',
    isFinish: false
  }
]

export default new VuexStore.Store({
  state: {
    title: 'todo-Vuex',
    todoList
  },
  getters: {
    toggleAll (state) {
      if (!state.length) return false
      return state.todoList.every(item => item.isFinish)
    }
  },
  mutations: {
    addTodo (state, type) {
      state.todoList.push({
        id: state.todoList.length ? state.todoList.sort((a, b) => a.id - b.id)[state.todoList.length - 1]['id'] - 0 + 1 : 1,
        content: type,
        isFinish: false
      })
    }
  }
})
