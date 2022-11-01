<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  export default {
      props: {
          productImg: String,
          productName: String,
          price: String,
      },
      methods: {

      },
  }
</script>

<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide></swiper-slide>
    <swiper-slide><img src="../assets/pokemon_kigu.png"></swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>

    <div class="carousel">

        <div class="carousel-content">
          <div class="carousel-text">
              <h2>ADVENTURE TIME <br/>COLLZECTION</h2>
              <a href="#" class="carousel-button">Ver colección</a>
          </div>    
          
          <img src="../assets/portada.png">
        </div>

        
        

    </div>


</template>

<style>
    .carousel{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .carousel img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .carousel-content{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:550px
  }

  .carousel-text{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px
  }
  .carousel-text h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
  }

  .carousel-content a{
    text-decoration: none;
    color: white;
    border: solid 3px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 32px;
    padding-right: 32px;
    font-weight: 500;
    border-radius: 10px;
    font-size: 18px;
  }
</style>