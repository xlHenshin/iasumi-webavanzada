<script>
  import { mapStores } from "pinia";
  import { useProductsStore } from "../stores/products";
  
  export default {
    data() {
      return { currentProduct: {} };
    },
    computed: {
      ...mapStores(useProductsStore),
    },
    mounted() {
      this.currentProduct = this.productsStore.getProductById(
        this.$route.params.productId
      );
      console.log(this.currentProduct);
    },
    methods: {
      addToCart(e){
        e.preventDefault();
        this.productsStore.addToCart(this.currentProduct)
      }
    }
  };
  </script>

<template>
  <div class="detailsContent">
    <aside class="detailAside">
      <img :src="currentProduct.image"/>
    </aside>

    <div class="detailInfo">
      <div class="infoTop">
        <h2>{{currentProduct.name}}</h2>
        <p>${{currentProduct.price}}</p>
      </div>

      <div class="infoMid">
        <select>
          <option disabled selected="">Talla</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <div class="amount">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button @click="addToCart" class="cartButton">AÑADIR AL CARRO</button>
      </div>
      
      <div class="infoBottom">
        <h4>Descripción del producto</h4>
        <p>{{currentProduct.description}}</p>
      </div>
      
    </div>
  </div>
</template>

<style>

  .detailsContent{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .detailAside{
    width: 60%;
  }

  .detailAside img{
    width: 820px;

  }

  .detailInfo{
    width: 40%;
  }

  .infoTop{
    margin-bottom: 50px;
  }

  .infoTop h2{
    font-size: 40px;
    font-weight: 700;
  }

  .infoTop p{
    font-size: 32px;
    font-weight: 500;
  }

  .infoMid{
    margin-bottom: 50px;
  }

  .infoMid select{
    background: #ffffff;
    border: solid 1px #000;
    border-radius: 0;
    width: 150px;
    height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .amount{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .amount button{
    font-size: 30px;
    font-weight: 600;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none; 
    cursor: pointer;
  }

  .amount span{
    font-size: 24px;
    font-weight: 500;
  }

  .cartButton{
    background-color: black;
    border: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding:12px;
    padding-left: 80px;
    padding-right: 80px;
    border-radius: 10px;
    font-weight: 600;
  }

  .infoBottom h4{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    width: 30vw;
  }

  .infoBottom p{
    font-size: 16px;
    font-weight: 400;
    width: 30vw;
  }
</style>