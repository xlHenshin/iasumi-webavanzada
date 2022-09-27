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
        <img class="nav-logo" src="../src/assets/iasumilogo.avif">
      </RouterLink>

      <div class="nav-items">
        <RouterLink to ="/about" class="firstItems">KIGURUMIS</RouterLink>
        <RouterLink to ="/about" class="firstItems">SUPERIOR</RouterLink>
        <RouterLink to ="/about" class="firstItems">INFERIOR</RouterLink>
        <RouterLink to ="/about" class="firstItems">ACCESORIOS</RouterLink>
        <RouterLink to ="/create" class="firstItems">MÁS</RouterLink>
  
      </div>

        <ul class="nav-items leftitem">
            <li>
                <span>
                    <img class="nav-icon" src="../src/assets/searchicon.svg" alt="">
                    <input type="text" class="nav-search" placeholder="Buscar" id="">
                </span>
                
            </li>
            <li>
                <a href="#">
                    <img class="nav-icon" src="../src/assets/accounticon.svg">
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="nav-icon" src="../src/assets/shopbagicon.svg">
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

  header{
    width: 100%;
    position:relative;
  }

  main{
    width: 100%;
  }

  .nav{
        width: 100%;
        height: 83px;
        display: flex;
        flex-direction: row;
        background-color: #FFE905;
        align-items: center;
        justify-content: space-between;
    }

    .nav-logo{
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 18px;
        margin-bottom: 18px;
        width: 135px;
        height: 47px;
    }

    .nav-items{
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        font-weight: 600;
        color:black;
    }

    .nav-items a{
        color:black;
        text-decoration: none;
    }

    .firstItems{
        margin-right: 45px;
    }

    .nav-icon{
        height: 25px;
        width: auto;
    }

</style>
