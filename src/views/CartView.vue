<script>
    import { mapStores } from "pinia";
  import { useProductsStore } from "../stores/products";
  
  export default {
    data() {
        return {
        
        };
    },
    computed: {
        ...mapStores(useProductsStore),
        cart(){
            return this.productsStore.getCart
        }
    },
    mounted() {

    },
    methods: {
        
    }
  };
</script>

<template>
    <section class="content">

        <div class="left__content">
            <h1 class="title">Cart</h1>

            <section class="products" id="cart">
                <RouterLink class="products__cart" v-for="product in cart" :key="product.name" :to="`/details/${product.id}`">
                    <img :src="product.image"/>
                    <h4>{{ product.name }}</h4>
                    <p>${{ product.price }}</p>
                </RouterLink>
            </section>
        </div>

        <div class="summary">

            <div class="summary__text">
                <h3 class="summary__title">Resumen</h3>

            <div class="summary__description">

                <div class="summary__item">

                    <p>Subtotal</p>
                    <p id="subtotal"></p>
                </div>

                <div class="summary__item">

                    <p>Shipping</p>
                    <p>Gratis</p>
                </div>
            </div>

            <h3 class="summary__total" id="total"></h3>
            </div>

            <div class="summary__buttons">
                <button class="summary__checkout" id="checkoutBtn">PAGAR</button>
                <RouterLink to="/about" class="summary__shop">Seguir comprando</RouterLink>
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
    .content {
        padding: 4vw;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }

    .left__content {
        width: 70%;
        margin-right: 100px;
    }

    .title {
        font-size: 4vw;
    }

    .summary {
    background-color: #ffffff;
    width: 25vw;
    height: 25vw;
    padding: 2.5vw;
    box-shadow: .4vw .4vw 1vw grey;
    display: flex;
    flex-direction: column;
    justify-content: center;

        &__text {
            width: 100%;
        }

        &__title {
            font-size: 1.5vw;
        }

        &__description {
            font-size: 1vw;
            margin-top: 2vw;
            margin-bottom: 2vw;
        }

        &__item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        &__total {
            font-size: 1.5vw;
            margin-bottom: 25px;
        }

        &__buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__checkout {
            width: 100%;
            background-color: #000000;
            border: none;
            color: white;
            text-decoration: none;
            cursor: pointer;
            padding: 12px;
            padding-left: 1vw;
            padding-right: 1vw;
            border-radius: 1vw;
            font-weight: 600;
            font-size: 1vw;
            margin-bottom: 1.5vw;
        }

        &__shop {
            font-size: 1em;
            color: #717171;
        }
}
</style>