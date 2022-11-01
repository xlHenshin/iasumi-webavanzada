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
    <section class="content">
        <h1>Crear cuenta</h1>
        <form class="content__form">
        
            <div class="content__item">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email">
            </div>
            
            <div class="content__item">
                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password" v-model="password">
            </div>
        
            <div class="content__item">
                <label for="cpassword">Confirmar contraseña</label>
                <input type="password" name="cpassword" id="cpassword" v-model="confirmPassword">
            </div>
        
            <button @click="newUser">Crear cuenta</button>
        </form>
    </section>
    
</template>

<style scoped lang="scss">

    .content{
        background-color: rgb(219, 219, 219);
        border-radius: 1vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2vw;
        padding-bottom: 2vw;
        margin-left: 30vw;
        margin-right: 30vw;
        margin-top: 5vw;
        margin-bottom: 5vw;

        &__form{
            display: flex;
            flex-direction: column;
        }

        &__form button{
            background-color: black;
            border: none;
            color: white;
            text-decoration: none;
            cursor: pointer;
            padding: 1vw;
            border-radius: 0.5vw;
            font-weight: 600;
            margin-top: 1vw;
        }

        &__item{
            display: flex;
            flex-direction: column;
            margin-bottom: 1vw;
        }

        &__item input{
            border: solid 0.1vw #000;
            border-radius: 0;
            padding: 0.8vw;
            margin-top: 0.5vw;
            margin-right: 0.5vw;
        }

        &__form button{
            background-color: black;
            border: none;
            color: white;
            text-decoration: none;
            cursor: pointer;
            padding: 1vw;
            border-radius: 0.5vw;
            font-weight: 600;
            margin-top: 1vw;
        }
    }

    .content h1{
        font-size: 2vw;
        margin-bottom: 1vw;
    }

</style>