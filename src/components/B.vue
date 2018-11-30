<template>
  <div>
    <div v-if="a.c">
    子级
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      a: {
        c:1
      }
    } 
  },

  created () {
    setTimeout(() => {
      this.a.c = null
    }, 100)
    console.log(this.a)
  }
}
</script>
