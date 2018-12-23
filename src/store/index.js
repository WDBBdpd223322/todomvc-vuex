import Vue from 'vue'
import VuexStore from 'vuex'

Vue.use(VuexStore)

export default new VuexStore.Store({
  state: {
    title: 'todo-Vuex'
  }
})
