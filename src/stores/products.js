import { defineStore } from "pinia";
import { db } from "../firebase/config";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
///// OPTIONS STORE
export const useProductsStore = defineStore("products", {
    state: () => ({
       
        databaseProducts: [],
        localStorageProducts: [],
        selectedFilters: {}
    }),
    getters: {
        getProducts: (state) => [...state.products],
        getFirebaseProducts: (state) => [...state.databaseProducts],
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
        newProduct(product) {
            this.localStorageProducts.push(product)
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts))
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
        
        //método para subir los productos
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