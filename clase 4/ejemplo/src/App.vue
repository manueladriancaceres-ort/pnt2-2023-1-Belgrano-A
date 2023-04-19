<script>
  import Sistema from './components/Sistema.vue'
  import Pie from './components/Pie.vue'
  export default {
    components: {Sistema,Pie},
    data() {
      return {
        unAutor: 'Adrian, prof. PNT2'
      }
    }
  }
</script>

<template>
  <Sistema/>
  <br/>
  <Pie :autorSistema="unAutor"/>
</template>

<style scoped>
</style>
