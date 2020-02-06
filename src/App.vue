<template>
  <div id="app">
    <div v-if="stats">
    <button @click="showStats"> Hide Stats </button>
    </div>
    <div v-if="!stats">
    <button @click="showStats"> Show Stats </button>
    </div>
    <div v-if="stats">
      <stats/>
  </div>
      <main-com/>

  </div>
</template>

<script>
import MainCom from './components/Main.vue'
import Stats from './components/Stats.vue'

export default {
  name: 'app',
  components: {
    MainCom,
    Stats,
  },
  data() {
    return {
      stats: false,
    }
  },
  methods: {
    showStats(){
      this.stats = !this.stats
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

button {
    padding: 5px;
    border-radius: 3px;
    background-color: #0cf50cbb;
    cursor: pointer;
}
</style>
