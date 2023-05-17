<template>
  <ion-page>
    <h2>System</h2>
    <ion-content>
      <ion-list v-for="e in lista" :key="e.id">
        {{ e.id }} {{ e.descripcion }}
        <ion-button @click="eliminar(e.id)">Eliminar</ion-button>
        <ion-button @click="modificar(e.id)">Modificar</ion-button>
      </ion-list>
      <ion-input
        label="id"
        label-placement="stacked"
        v-model="elemento.id"
      ></ion-input>
      <ion-input
        label="Descripcion"
        label-placement="stacked"
        v-model="elemento.descripcion"
      ></ion-input>
      <ion-button @click="agregar"> Agregar a la lista </ion-button>
      <ion-button @click="cargarLista"> Cargar lista </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'
import listaService from '../services/listaService'

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      lista: [],
      elemento: {}
    }
  },
  async mounted() {
    this.cargarLista()
  },
  methods: {
    irahome() {
      this.$router.push("/")
    },
    async cargarLista() {
      try {
        this.lista = await listaService.cargar()
      } catch ( e ) {
        alert( e )
      }
    },
    async agregar() {
      try {
        const elem = { ...this.elemento }
        await listaService.agregar(elem)
        await this.cargarLista()
      } catch (error) {
        console.log(error);
      }
    },
    async eliminar(id) {
      try {
        await listaService.eliminar(id)
        await this.cargarLista()
      } catch ( error) {
        alert(' Se produjo un error')
      }
    },
    async modificar(id) {
      try {
        const elem = { ...this.elemento }
        await listaService.modificar(id,elem)
        await this.cargarLista()
      } catch ( error) {
        alert(' Se produjo un error')
      }
    }

  }
}
</script>

<style>
/*
ion-button {
    --background: #93e9be;
    --background-hover: #9ce0be;
    --background-activated: #88f4be;
    --background-focused: #88f4be;

    --color: blue;

    --border-radius: 0;
    --border-color: #000;
    --border-style: solid;
    --border-width: 1px;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --ripple-color: deeppink;

    --padding-top: 10px;
    --padding-bottom: 10px;
  }
*/
</style>