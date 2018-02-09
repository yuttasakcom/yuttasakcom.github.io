import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
    showDone: false,
    todos: [
      {
        text: 'Refactor CSS',
        done: true
      },
      {
        text: 'Scure Docker Instaces',
        done: false
      },
      {
        text: 'Inject flavoring',
        done: false
      }
    ]
  },
  getters: {
    todos({ todos }) {
      return todos
    },
    showDone({ showDone }) {
      return showDone
    }
  },
  mutations: {},
  actions: {}
}

export default new Vuex.Store(store)
