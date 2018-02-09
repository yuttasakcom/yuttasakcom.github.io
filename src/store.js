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
  mutations: {
    mutate_showDone(state, payload) {
      state.showDone = payload
    }
  },
  actions: {
    setShowDone(context, payload) {
      context.commit('mutate_showDone', payload)
    }
  }
}

export default new Vuex.Store(store)
