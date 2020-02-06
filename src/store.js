import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "danielphiri",
    tasks: [
      { taskName: "take pictures", taskReciever: "mom and dad" },
      { taskName: "email organisers slides", taskReciever: "myself" },
      { taskName: "send resume", taskReciever: "dev job" },
    ]
  },
  getters: {
    taskCount: state => {
      return state.tasks.length;
    }
  },
  mutations: {
    ADD_TASK: (state, task) => {
    
      state.tasks.push(task);
    },
    REMOVE_TASK: (state, task) => {
      state.tasks.splice(task, 1);
    },
    REMOVE_ALL: state => {
      state.tasks = [];
    }
  },
  actions: {
    removeTask: (context, task) => {
      context.commit("REMOVE_TASK", task);
    },
    removeAll({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("REMOVE_ALL");
          resolve();
        }, 2000);
      });
    }
  }
});
