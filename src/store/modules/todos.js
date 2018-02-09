const state = {
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
};

const getters = {
  todos({ todos }) {
    return todos;
  },
  showDone({ showDone }) {
    return showDone;
  }
};

const mutations = {
  updateShowDone(state, payload) {
    state.showDone = payload;
  }
};

const actions = {
  updateShowDone({ commit }, payload) {
    commit("updateShowDone", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
