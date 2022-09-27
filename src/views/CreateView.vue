<script>
    import { mapStores } from "pinia";
    import { useProductsStore } from "../stores/products";
    
    export default {
        computed: {
            ...mapStores(useProductsStore),
                allProducts() {
                    return this.productsStore.getProducts;
                },
        },
        methods: {
            createNewProduct() {
                const newProduct = {
                    name: this.name,
                    color: this.color,
                };
        
                this.productsStore.newProduct(newProduct);
                this.name = "";
                this.color = "";
            }
        }
    };
    </script>