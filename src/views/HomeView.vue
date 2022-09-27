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

      <div class="carousel-content">
      <div class="carousel-text">
          <h2>ADVENTURE TIME <br/>COLECTION</h2>
      </div>
      
      <a href="#" class="carousel-button">Ver colección</a>
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

.collection{
  display: flex;
  flex-direction: row;

  margin: 50px;

  &__img{
    height: 500px;
  }

  &__right{
    height: 500px;
    background-color: #5A0781;
    color: white;
    padding: 50px;
  }

  &__right a{
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

  &__text{
    display: flex;
    flex-direction: column;
    text-align: right;
  }
}
</style>