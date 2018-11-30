<template>
  <div>
    父级
  </div>
</template>

<script>
import doc from './B'
export default {
  components: {doc},
  data () {
    return {

    }
  },

  created () {
    console.log('a')
  }
}
</script>
