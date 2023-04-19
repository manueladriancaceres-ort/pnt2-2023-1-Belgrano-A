<template>
  <div>
    <h2>Detalle</h2>
    Numero Gestion <input type="text" v-model="gestion.id">
    <br/>
    Descripcion <input type="text" v-model="gestion.desc">
    <br/>
    <button v-on:click="agregarGestion">Agregar Gestion</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            gestion: {}
        }
    },
    methods: {
        agregarGestion() {
            this.$emit('agregarDetalle',this.gestion);
            this.gestion = {}
        }
    }
}
</script>

<style>

</style>