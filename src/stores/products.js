import { defineStore } from "pinia";
///// OPTIONS STORE
export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [
            { id: "1",
            name: "Buso Hockey Puro Hueso", 
            price: '160000', 
            image: "../public/busopurohueso.png",
            description: 'Hola soy una descripción del buso',
            type: "Superior"
            },
            { id: "2",
            name: "Camiseta Inosuke", 
            price: '90000', 
            image: "../public/camisetainosuke.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "Superior"
            },
            { id: "3",
            name: "Chaqueta Coraje", 
            price: '160000', 
            image: "../public/chaquetacoraje.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "Superior"
            },
            { id: "4",
            name: "Pantuflas Gengar", 
            price: '80000', 
            image: "../public/pantuflasgengar.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "Accesorios"
            },
            { id: "5",
            name: "Jogger Carlitos", 
            price: '150000', 
            image: "../public/joggercarlitos.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "Inferior"
            },
        ],
        localStorageProducts: [],
        selectedFilters: {}
    }),
    getters: {
        getProducts: (state) => [...state.products],
        getFilteredProducts: (state) => {
            const filteredProducts = state.products.filter((product)=> {
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
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.id.toLowerCase());
            return filteredProducts ? {...filteredProducts[0] } : null
        },
        applyFilter(key, value){
            this.selectedFilters[key] = value
            console.log(this.selectedFilters)
        }
    },
});