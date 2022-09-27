<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/Footer.vue'
import MainComp from './components/Main.vue'

export default {
  components:{
    NavBar,
    FooterComp,
    MainComp
  }
}

</script>


<template>
  <header>
    <NavBar />
  </header>
  <main>
    <MainComp />
  </main>

  <footer>
    <FooterComp />
  </footer>

</template>

<style>


  header{
    width: 100%;
    position:relative;
  }

</style>
