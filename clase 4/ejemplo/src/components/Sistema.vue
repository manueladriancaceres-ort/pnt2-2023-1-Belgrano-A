<template>
  <div>
    <h2>Sistema de Gestión</h2>
    <li v-for="ges in gestiones" :key="ges.id">
      {{ ges.id }} {{ ges.desc }}
    </li>
    <button v-on:click="ordenarPorDes">Ordenar Por Descripcion</button>
    <Detalle @agregarDetalle="agregarGestion"/>
  </div>
</template>

<script>
import Detalle from './Detalle.vue'
export default {
  components: { Detalle},
  data() {
    return {
      gestiones: [{id:10,desc:"Envio mail"},{id:11,desc:"Envio whatsapp"}],
    }
  },
  methods: {
    agregarGestion(gestion) {
      this.gestiones.push(gestion);      
    },
    ordenarPorDes() {
      this.gestiones.sort((a,b)=>a.desc.localeCompare(b.desc))
    }
  }
}
</script>

<style>

</style>