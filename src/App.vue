<template>
  <div id="app">
    <Headers />
    <Main/>
    <Historys />
  </div>
</template>

<script>
import './styles/global.css'
import './assets/style.css'

import Main from './components/Main.vue'
import Headers from './components/Header.vue'
import Historys from './components/History.vue'

export default {
  name: 'App',
  components: {
    Headers,
    Main,
    Historys 
  },
}
</script>

<style>

</style>
