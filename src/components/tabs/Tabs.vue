<template>
  <div>
    {{aaa}},{{bbb}}
  </div>
</template>

<script>
  export default {
    data () {
      return{
        aaa: 'asdfasdf',
        bbb: null
      }
    },

    methods: {
      tochange () {
        this.aaa = '改变'
      },

      ondelete () {
        this.bbb = '自己'
      }
    },

    created () {
      this.$start()
    }
  }
</script>