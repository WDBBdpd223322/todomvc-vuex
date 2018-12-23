import Vue from 'vue'
import VuexStore from 'vuex'

Vue.use(VuexStore)

const todoList = [
  {
    id: 1,
    content: '吃饭',
    isFinish: false
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
  }
})
