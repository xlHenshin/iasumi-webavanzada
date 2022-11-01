<script>
  export default {
      props: {
          productImg: String,
          productName: String,
          price: String,
      },
      methods: {

      }
  }
</script>

<template>
  <div class="carousel">

    <div class="carousel__content">
      <div class="carousel__text">
          <h2>ADVENTURE TIME <br/>COLECTION</h2>
      </div>
    
      <a href="#" class="carousel__button">Ver colección</a>
    </div>

    <img src="../assets/portada.png">

  </div>

  <div class="collection">
    <aside class="collection__aside"> 
      <img  class="collection__img" src="../assets/invierano.png">
    </aside>

    <div class="collection__right">
      <div class="collection__text">
        <h3>NUEVA COLECCIÓN</h3>
        <h2>INVIERANO</h2>
        <p>Hawaianas otakus para tu armario</p>
      </div>
      <a href="#">Ver colección</a>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  $backcollectioncolor: #5A0781;

  .carousel{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel img{
  width: 100%;
  height: 50vw;
  object-fit: cover;
}

.carousel__content{
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:40vw;
}

.carousel__text{
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5vw
}
.carousel__text h2{
  font-weight: 700;
  font-size: 2.5vw;
  line-height: 1;
}

.carousel__content {
  display: flex;
  flex-direction: column;
  align-items: left ;
}

.carousel__content a{
  text-decoration: none;
  color: white;
  border: solid .2vw;
  padding-top: .5vw;
  padding-bottom: .5vw;;
  padding-left: 2vw;;
  padding-right: 2vw;;
  font-weight: 500;
  border-radius: .5vw;
  font-size: 1vw;
}

.collection{
  display: flex;
  flex-direction: row;
  margin: 4vw;
  justify-content: center;

  &__img{
    height: 30vw;
  }

  &__right{
    height: 30vw;
    background-color: $backcollectioncolor;
    color: white;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__right a{
    text-align: center;
    text-decoration: none;
    color: white;
    border: solid .2vw;
    padding-top: .4vw;
    padding-bottom: .4vw;
    padding-left: 2vw;
    padding-right: 2vw;
    font-weight: 500;
    border-radius: .5vw;
    font-size: 1vw;
  }

  &__text{
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-bottom: 3vw;
  }

  &__text h2{
    margin-top: -1vw;
    font-size: 3vw;
  }
  &__text h3{
    font-size: 1vw;
  }

  &__text p{
    font-size: 0.8vw;
    font-weight: 500;
  }
}
</style>