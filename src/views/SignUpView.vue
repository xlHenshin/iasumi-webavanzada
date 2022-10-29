<script>
import {useAuthenticationStore} from '../stores/authentication'
import {mapStores} from 'pinia'
import { auth } from '../firebase/config'

    export default{
        data(){
            return {
                email: '',
                password: '',
                confirmPassword: '',
            }
        },
        computed: {
            ...mapStores(useAuthenticationStore)
        },
        methods: {
            newUser(e){
                e.preventDefault();
                if(this.password===this.confirmPassword){
                    this.authenticationStore.newUserAwait(this.email, this.password)
                    console.log('no await')
                }else{
                    alert('Las contraseñas no coinciden')
                }
                
            }
        },

        mounted(){
            console.log(auth.currentUser)
        }

    }

</script>

<template>
    <section>
        <h1>Crear cuenta</h1>
        <form>
        
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email">
        <br>
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password" v-model="password">
        <br>
        <label for="cpassword">Confirmar contraseña</label>
        <input type="password" name="cpassword" id="cpassword" v-model="confirmPassword">

        <button @click="newUser">Crear cuenta</button>
    </form>
    </section>
    

</template>

<style>



</style>