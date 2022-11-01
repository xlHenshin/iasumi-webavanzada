import { defineStore } from "pinia";
import { db } from "../firebase/config";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
///// OPTIONS STORE
export const useProductsStore = defineStore("products", {
    state: () => ({
       
        databaseProducts: [],
        cart: [],
        localStorageProducts: [],
        selectedFilters: {}
    }),
    getters: {
        getFirebaseProducts: (state) => [...state.databaseProducts],
        getCart: (state) => [...state.cart],
        getFilteredProducts: (state) => {
            const filteredProducts = state.databaseProducts.filter((product)=> {
                const types = product.type
                const typeFilter = state.selectedFilters.type
                console.log(types)
                console.log(typeFilter)
                console.log(types.includes(typeFilter) )

                return (typeFilter && typeFilter !== "Todos") && types.includes(typeFilter) === true
            })
            console.log(filteredProducts)
            return filteredProducts
        },
        getAllTypes: (state) =>{
            const types = ['Todos', 'Superior', 'Inferior', 'Kigurumis', 'Accesorios']
            return types
        }
    },
    actions: {
        async newProduct(product) {
            try {
                const newProduct = product;
                const elementId = newProduct.id
                await setDoc(doc(db, "products", elementId),newProduct)
                alert("¡Producto creado!")
            } catch (error) {
                console.log(error)
            }
        },
        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'))
            if(this.localStorageProducts)
            this.products = this.products.concat([...this.localStorageProducts])
        },
        getProductById(id) {
            const filteredProducts = this.databaseProducts.filter((product) => id.toLowerCase() === product.id.toLowerCase());
            return filteredProducts ? {...filteredProducts[0] } : null
        },
        applyFilter(key, value){
            this.selectedFilters[key] = value
            console.log(this.selectedFilters)
        },
        getMyCart(){

            const cart = localStorage.getItem("cart")
            return cart ? JSON.parse(cart) : [];
        },
        async addToCart(product){
            
            const productAdded = {
                name: product.name,
                price: product.price,
                image: product.image,
            }

            this.cart.push(productAdded);

            alert("¡Tu producto ha sido agregado al carrito!")
            console.log(this.cart)
        },
        async getFirebaseData(){

            const collectionRef = collection(db, "products");
            const { docs } = await getDocs(collectionRef);

            const firebaseProducts = docs.map((doc) => {
                return {
                id: doc.id,
                name: doc.data().element.name,
                price: doc.data().element.price,
                image: doc.data().element.image,
                description: doc.data().element.description,
                type: doc.data().element.type,
                };
            });
            this.databaseProducts=firebaseProducts
            
        },

        async addProductsDatabase(){
            try {
                const dbUpload = this.products;
                console.log('base a subir ', dbUpload)

                for (let index = 0; index < dbUpload.length; index++) {
                    const element = dbUpload[index];
                    const elementId = dbUpload[index].id;
                    await setDoc(doc(db, "products", elementId), {element});
                    console.log('Producto subido: ', elementId)
                }
                
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            }
        }
    },
});