import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, user: {email:'', permissions: [] }, isMenu: true }
    },
    getters: {
        
    },
    actions: {
        logout() {
            this.isLogin = false
            this.user =  {email:'', permissions: [] }
        },
        login(user) {
            this.isLogin = true
            this.user = user
        },
        hasPermission(access) {
            return this.user.permissions.filter(a => a = access).length > 0 ? true:false
        },
        ocultarMenu() {
            this.isMenu = false
        },
        verMenu() {
            this.isMenu = true
        },
    },
})