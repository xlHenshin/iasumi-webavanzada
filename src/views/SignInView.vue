<script>
import { auth } from '../firebase/config'
import {mapStores} from 'pinia'
import {useAuthenticationStore} from '../stores/authentication'


    export default{
        data(){
            return {
                email: '',
                password: '',
            }
        },
        computed: {
            ...mapStores(useAuthenticationStore),
            userIsLogged(){
                return this.authenticationStore.user !== null
            }
        },
        methods: {
            signIn(e){
                e.preventDefault();
                this.authenticationStore.signIn(this.email, this.password)
            },
            logOut(e){
                e.preventDefault()
                this.authenticationStore.logOut();
            }
        },
        mounted(){
            console.log(auth.currentUser)
        }

    }

</script>

<template>
    <section v-if="!userIsLogged">
        <h1>Inicia Sesión</h1>
        <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="" v-model="email">
            <br>
            <label for="password">Password</label>
            <input type="password" name="password" id="" v-model="password">

            <button @click="signIn">Iniciar sesión</button>
    </form>
    </section>
    <section v-else>
        <h1>Ya hay un usuario loggeado</h1>
        <button @click="logOut">Cerrar Sesión</button>
    </section>
    
</template>

<style>



</style>