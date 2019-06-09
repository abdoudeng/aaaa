<template>
  <div id="app">
      <ul>
        <li><router-link to="/car">car management</router-link></li>
        <li><router-link to="/driver">driver management</router-link></li>
        <li><router-link to="/record">record management</router-link></li>
      </ul>
      <layout></layout>  
  </div>
</template>

<script>
import layout from './components/layout.vue'

export default {
  name: 'app',
  components: {
    layout
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
  margin-top: 60px;
}
</style>
