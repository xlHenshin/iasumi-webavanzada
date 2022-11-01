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

    <div class="content">
        <section class="content__notLogged" v-if="!userIsLogged">
            <h1>Iniciar Sesión</h1>
            <form class="content__form">
                <div class="content__item">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="" v-model="email">
                </div>
                
                <div class="content__item">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="" v-model="password">
                </div>

                <button @click="signIn">Iniciar sesión</button>
            </form>
        </section>
        <section class="content__Logged" v-else>
            <h1>Ya hay un usuario loggeado</h1>
            <button @click="logOut">Cerrar Sesión</button>
        </section>
        </div>
    
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

        &__notLogged h1{
            font-size: 2vw;
            margin-bottom: 1vw;
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

        &__Logged{
            margin-top: 2vw;
            margin-bottom: 2vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__Logged h1{
            font-size: 2vw;
            margin-bottom: 1vw;
            
        }

        &__Logged button{
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

</style>