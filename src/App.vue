<template>
  <div id="app">
    <helloworld/>
  </div>
</template>

<script>
import helloworld from './components/HelloWorld'

export default {
  name: 'App',
  components: { helloworld },
  data () {
    return {
      isRouterAlive: true
    }
  },

  methods: {
   reload () {

   }
  }
}
</script>

<style>
html,body {
  margin:0;
  padding:0;
}
#app {

}
</style>
