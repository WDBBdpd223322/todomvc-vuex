export default {
  getList () {
    return JSON.parse(window.localStorage.getItem('todoList')) || []
  },

  setList (data) {
    window.localStorage.setItem('todoList', JSON.stringify(data))
  }
}
