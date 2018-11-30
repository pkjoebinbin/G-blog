<template>
  <div>
    <dom/>
    <bom/>
    <button @click="test" v-cloak>12313</button>
  </div>
</template>


<script>
import dom from './A'
import bom from './B'

export default {
  components: {dom, bom},
  data () {
    return {
      c: false
    }
  },

  methods: {
    test () {
      this.c = true
    }
  }
}
</script>

<style>
  [v-cloak] {
  display: none;
}
</style>