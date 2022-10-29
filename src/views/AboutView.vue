<script>
  import { mapStores } from "pinia";
  import { useProductsStore } from "../stores/products";
  
  export default {
    data(){
      return{
        type: 'Todos'
      }
    },
    props: {
      msg: String
    },
    computed: {
      ...mapStores(useProductsStore),
      allProducts() {
        if (this.type==='Todos') {
          return this.productsStore.getProducts;
        }else{
          return this.productsStore.getFilteredProducts;
        }
      },
      getTypes(){
        return this.productsStore.getAllTypes
      }
    },
    
    mounted(){
      this.productsStore.loadProducts()
    },
    methods: {
      setFilter(key, value){
        this.productsStore.applyFilter(key, value)
      }
    }
  };
</script>
  
<template>
  <div class="productsContainer">

    <div class="productsHead">

      <h2>NUESTRXS PRODUCTOS</h2>

      <div class="filters">
        
        <div class="filterItem">
          <label for="filterType">Filtrar por:</label>
          
          <select name="filterType" id="filterType" v-model="type" @change="() => setFilter('type', type)">
            <option v-for="type in getTypes" :key="type" :value="type" > {{type}} </option>
          </select>
        </div>

      <div class="filterItem">
        <label for="type">Ordenar por:</label>
        <select name="orderBy" id="filterBy">
          <option value="">Selecciona una opción</option>
          <option value="asc">Precio: Bajo - Alto</option>
          <option value="desc">Price: Alto - Bajo</option>
        </select>
      </div>
    </div>

    </div>

    <section class="products">
      <RouterLink class="singleProduct" v-for="product in allProducts" :key="product.name" :to="`/details/${product.id}`">
        <img :src="product.image"/>
        <h4>{{ product.name }}</h4>
        <p>${{ product.price }}</p>
    </RouterLink>
    </section>
  </div>
</template>
  
<style>
  .productsContainer{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .productsHead{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .filters{
    display: flex;
    flex-direction: row;
  }

  .filterItem{
    display: flex;
    flex-direction: column;
    margin-right: 15px;
  }

  .filterItem label{
    margin-bottom: 5px;
    font-weight: 600;
  }

  .filterItem select{
    background: #ffffff;
    border: solid 1px #000;
    border-radius: 0;
  }

  .products{
    display: flex;
    align-items: center;
    margin-top: 50px;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-bottom: 80px;
  }

  .products a{
    color: black;
    text-decoration: none;
  }

  .singleProduct{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 50px;
  }

  .singleProduct img{
    width: 300px;
    height: auto;
  }

  .singleProduct h4{
    margin-top: 10px;
    font-weight: 500;
  }

  .singleProduct p{
    margin-top: 5px;
    font-weight: 700;
  }
</style>