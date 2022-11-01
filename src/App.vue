<script>
import { RouterLink, RouterView } from 'vue-router'
import FooterComp from './components/Footer.vue'
import MainComp from './components/Main.vue'

export default {
  components:{
    RouterLink, RouterView,
    FooterComp,
    MainComp
  }
}

</script>


<template>
  <header>
    <nav class="nav">
      <RouterLink to ="/">
        <img class="nav__logo" src="../src/assets/iasumilogo.avif">
      </RouterLink>

      <div class="nav__itemsCenter">
        <RouterLink to ="/about" class="nav__firstItems">KIGURUMIS</RouterLink>
        <RouterLink to ="/about" class="nav__firstItems">SUPERIOR</RouterLink>
        <RouterLink to ="/about" class="nav__firstItems">INFERIOR</RouterLink>
        <RouterLink to ="/about" class="nav__firstItems">ACCESORIOS</RouterLink>
        <RouterLink to ="/create" class="nav__firstItems">MÁS</RouterLink>

  
      </div>

      <ul class="nav__itemsRight">
          <li>
            <input type="text" class="nav__search" placeholder="Buscar..." id="">
          </li>
          <li>
              <RouterLink to ="/sign-in" class="nav__icon">
                <img class="nav__icon" src="../src/assets/login.svg">
              </RouterLink>
              
          </li>
          <li>
              <RouterLink to ="/sign-up" class="nav__icon">
                <img class="nav__icon" src="../src/assets/accounticon.svg">
              </RouterLink>
              
          </li>
          <li>
              <a href="#">
                  <img class="nav__icon" src="../src/assets/shopbagicon.svg">
              </a>
          </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>

  <footer>
    <FooterComp />
  </footer>
</template>

<style scoped lang="scss">

  $brandColor: #FFE905;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
      background-size: cover;
  }

  header{
    width: 100%;
    position:relative;
  }

  main{
    width: 100%;
  }

  .nav{
        width: 100%;
        height: 5vw;
        display: flex;
        flex-direction: row;
        background-color: $brandColor;
        align-items: center;
        justify-content: space-between;

        &__logo{
        margin-left: 2vw;
        margin-top: 1vw;
        margin-bottom: 1vw;
        width: 8vw;
      }

      &__firstItems{
        margin-right: 2vw;
      }

      &__icon{
        height: 1.5vw;
        width: auto;
        margin-left: .2vw;
        margin-right: .2vw;
      }

      &__itemsCenter a{
        color:black;
        text-decoration: none;
        font-weight: 600;
      }

      &__itemsRight{
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        margin-right: 2vw;
      }

      &__search{
        background-color: white;
        border: solid .1vw #000;
        padding-top: .5vw;
        padding-bottom: .5vw;
        padding-left: 1vw;
        padding-right: 1vw;
        color: rgb(0, 0, 0);
        font-weight: 600;
        font-size: .6vw;
        border-radius: 0.2vw;
        letter-spacing: 0.1vw;
      }

  }

  footer{
    width: 100%;
  }

</style>
