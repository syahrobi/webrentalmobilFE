<template>
      <router-view />
    
</template>

<script>



export default {
  name: 'LayoutDefault',

  components: {
   
  },

  data () {
    return {
      leftDrawerOpen: !this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
