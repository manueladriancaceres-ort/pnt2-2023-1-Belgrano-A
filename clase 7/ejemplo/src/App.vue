<script>
import { RouterLink, RouterView } from 'vue-router'
import { IonApp, IonHeader, IonRouterOutlet } from '@ionic/vue'
import { useLoginStore} from './stores/login'
import { storeToRefs } from 'pinia'

export default {
  components: { IonApp, IonHeader, IonRouterOutlet },
  setup() {
    const store = useLoginStore();
    const { isLogin, user, isMenu } = storeToRefs(store) ;
    const { hasPermission, ocultarMenu } = store
    return { isLogin, user, isMenu, hasPermission, ocultarMenu };
  },
  methods: {
    ocultar() {
      this.ocultarMenu()
    }
  }
}
</script>

<template>
  <ion-app>
    <ion-header v-if="isMenu">
      <RouterLink to="/">Home |</RouterLink>
      <RouterLink to="/about">About |</RouterLink>
      <RouterLink v-if="isLogin" to="/system">System |</RouterLink>
      <RouterLink v-if="isLogin && hasPermission('config')" to="/config">Config |</RouterLink>
      <RouterLink @click="ocultar" v-if="!isLogin" to="/login">Login |</RouterLink>
      <RouterLink v-if="isLogin" to="/logout">Logout |</RouterLink>
      Usuario : {{ user.email }} 
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
</style>
