<script>
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
            ...mapStores(useAuthenticationStore)
        },
        methods: {
            signIn(e){
                e.preventDefault();
                this.authenticationStore.signIn(this.email, this.password)
            }
        },
        mounted(){
            console.log(this.authenticationStore.auth.currentUser)
        }

    }

</script>

<template>
    <section>

    </section>
    <h1>Inicia Sesión</h1>

    <form>
        <label for="email">Email</label>
        <input type="email" name="email" id="" v-model="email">
        <br>
        <label for="password">Password</label>
        <input type="password" name="password" id="" v-model="password">

        <button @click="signIn">Iniciar sesión</button>
    </form>
</template>

<style>



</style>