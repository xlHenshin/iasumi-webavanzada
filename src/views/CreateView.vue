<script>
    import { mapStores } from "pinia";
    import { useProductsStore } from "../stores/products";
    
    export default {
        data() {
            return {
                id: "",
                name: "",
                price: "",
                description: "",
                type:"",
                productImage:""
            };
        },
        computed: {
            ...mapStores(useProductsStore),
            allProducts() {
                return this.productsStore.getProducts;
            },
        },
        methods: {
            createNewProduct() {
                const newProduct = {
                    id: this.id,
                    name: this.name,
                    price: this.price,
                    image: this.productImage,
                    description: this.description,
                    type: this.type
                };
        
                this.productsStore.newProduct(newProduct);
                this.id="";
                this.name = "";
                this.price = "";
                //this.productImage = "";
                this.description = "";
                this.type = "";
            },
            readImage(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length){
                    return;
                }
                this.createImage(files[0])
            },
            createImage(file){
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    vm.productImage = e.target.result;
                }
                reader.readAsDataURL(file);
            },
                removeImage: function(e){
                this.productImage ="";
            }
        }
    };

    
    
</script>

<template>
    <section class="newProductData">
        <h2>REGISTRAR NUEVO PRODUCTO</h2>
        <div class="newData">
            <input placeholder='Id' v-model="id" type="text" name="Name" id="name" />
            <input placeholder='Nombre' v-model="name" type="text" name="Name" id="name" />
            <input placeholder="Precio" v-model="price" type="text" name="Price" id="price" />
            <textarea v-model="description" placeholder="Escribe una descripción" ref="textarea"></textarea>
            <input placeholder="Tipo" v-model="type" type="text" name="Tipo" id="price" />
            <input type="file" name="File" id="myFileInput" @change="(e)=> readImage(e)">
            <button  @click="(e) => createNewProduct()">CREAR</button>
        </div>
    </section>
</template>

<style>
    .newProductData{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .newData{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    .newData input{
        margin-bottom: 10px;
        border: solid 1px #000;
        border-radius: 0;
        padding: 15px;
        margin-top: 10px;
        margin-right: 10px;
    }

    .newData textarea{
        margin-bottom: 10px;
        border: solid 1px #000;
        border-radius: 0;
        padding: 15px;
        margin-top: 10px;
        margin-right: 10px;
    }

    .newData button{
        margin-top: 20px;
        background-color: black;
        border: none;
        color: white;
        text-decoration: none;
        cursor: pointer;
        padding: 12px;
        padding-left: 80px;
        padding-right: 80px;
        border-radius: 10px;
        font-weight: 600;
    }
</style>