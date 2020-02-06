<template>
  <div class="home">
    <div class="hello center">
      <div >
        <h1 class="header-text">Hi 👋, {{ username }}</h1>
        <h3 class="header-text">Add a few tasks</h3>

        <form @submit.prevent="addTask">
          <input class="input" type="text" placeholder="I'm supposed to.." v-model="taskName" />
          <input class="input" type="text" placeholder="for this person..." v-model="taskReciever" />
          <button class="add-button" type="submit" placeholder="Add task to list">Add task to list</button>
        </form>

        <ul>
          <li v-for="(task, index) in tasks" v-bind:key="index">
            {{ task.taskName }} for {{task.taskReciever}}
            <button
              v-on:click="removeTasks(index)"
              class="remove"
            >Done ✅</button>
          </li>
        </ul>
      </div>
      <div class></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Main",
  data() {
    return {
      taskName: "",
      taskReciever: "",
    };
  },
  computed: {
    ...mapState(["tasks", "username"])
  },
  methods: {
    ...mapMutations(["ADD_TASK"]),
    ...mapActions(["removeTask"]),
    addTask: function() {
      let newTask = Object.create(null);
      newTask["taskName"] = this.taskName;
      newTask["taskReciever"] = this.taskReciever;
      this.ADD_TASK(newTask);
      this.taskReciever = "";
      this.taskName = "";
    },
    removeTasks: function(task) {
      this.removeTask(task);
    }
  }
};
</script>

<style>
html,
#app,
.home {
  height: 100%;
}
body {
  background-color: #050505;
  margin: 0;
  height: 100%;
}
input {
  border: none;
  padding: 5%;
  width: calc(100% - 40px);
  box-shadow: 0 3px 3px lightgrey;
  margin-bottom: 5%;
  outline: none;
}

.header-text {
  color: #e9e9e9;
}

.add-button {
  border: none;
  border-radius: 2px;
  padding: 5%;
  background-color: #0cf50cbb;
  box-shadow: 0 2px 2px #fff;
  width: calc(100% - 100px);
  margin-bottom: 2%;
  outline: none;
}
.main {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  height: 100%;
}

.center {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 4%;
  background: white;
  margin-bottom: 8px;
  border-radius: 5px;
}

.remove {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #050505;
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: #00ff88de;
  cursor: pointer;
}
</style>