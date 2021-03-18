<template>
  <div class="stats">
    <h3 class="header-text">
      Here are your numbers, {{ mainModel.username }} 😬
    </h3>
    <p class="header-text">You need to perform {{ tasks.length }} tasks fam</p>

    <button v-on:click="removeAllTasks">Nope, can't even..</button>
    <p class="header-text">{{ message }}</p>
  </div>
</template>

<script>
import { ApplicationService } from "@/services";

import Vue from "vue";
export default Vue.extend({
  name: "Stats",
  data() {
    return {
      message: "",
      mainModel: ApplicationService.getMainModel(),
      tasks: ApplicationService.getTasks(),
    };
  },
  methods: {
    removeAllTasks() {
      ApplicationService.removeAllTasks();
      this.message = "Self care - tasks are gone";
    },
  },
});
</script>

<style scoped>
button {
  padding: 5px;
  margin-top: 5px;
  border-radius: 3px;
  background-color: #0cf50cbb;
  cursor: pointer;
}

.header-text {
  color: #e9e9e9;
}
</style>
