<script>
  import { mapStores } from "pinia";
  import { useProductsStore } from "../stores/products";
  
  export default {
    data() {
      return { currentProduct: {} };
    },
    computed: {
      ...mapStores(useProductsStore),
      allProducts() {
        return this.productsStore.getProducts;
      },
    },
    mounted() {
      this.currentProduct = this.productsStore.getProductById(
        this.$route.params.productId
      );
      console.log(this.currentProduct);
    },
  };
  </script>

<template>
  <div>
    <aside>
      <img class="card-image" :src="currentProduct.image"/>
    </aside>

    <div>
      <div>
        <h2>{{currentProduct.name}}</h2>
        <p>{{currentProduct.price}}</p>
      </div>

      <select class="size">
        <option disabled selected="">- Talla -</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <p>{{currentProduct.description}}</p>
    </div>
  </div>
</template>

<style>
</style>