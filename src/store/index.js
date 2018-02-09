import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  state: {
    showDone: false,
    todos: [
      {
        id: 1,
        text: "Refactor CSS",
        done: true
      },
      {
        id: 2,
        text: "Scure Docker Instaces",
        done: false
      },
      {
        id: 3,
        text: "Inject flavoring",
        done: false
      }
    ]
  },
  getters: {
    todos({ todos }) {
      return todos;
    },
    showDone({ showDone }) {
      return showDone;
    }
  },
  mutations: {
    updateShowDone(state, payload) {
      state.showDone = payload;
    }
  },
  actions: {
    updateShowDone({ commit }, payload) {
      commit("updateShowDone", payload);
    }
  }
};

export default new Vuex.Store(store);
