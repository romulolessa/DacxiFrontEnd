<template>
  <div id="app">
    <Headers />
    <Main/>
    <History />

  </div>
</template>

<script>
import './styles/global.css'
import './assets/style.css'

import Main from './components/Main.vue'
import Headers from './components/Header.vue'
import History from './components/History.vue'

export default {
  name: 'App',
  components: {
    Headers,
    Main,
    History 
  },
}
</script>

<style>

</style>
