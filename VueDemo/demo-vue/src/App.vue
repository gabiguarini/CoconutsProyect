<template>
  <div id="app">
    <form v-on:submit.prevent="agregarTarea">
      <input type="text" v-model="nombreTarea">
      <button type="submit">+</button>
    </form>
    <table>
      <tbody>
        <Tarea v-for="(tarea, index) in tareas" :texto="tarea" :key="index" @ItemBorrado="borrarTarea"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import Tarea from './components/Tarea.vue'

export default {
  name: 'App',
  components: {
    Tarea
  },
  data(){
    return {
      tareas: ["la tarea", "aprenderx"]
    }
  },
  methods: {
    agregarTarea: function () {
      this.tareas.push(this.nombreTarea);
    },
    borrarTarea: function (i) {
      this.tareas.splice(i, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
