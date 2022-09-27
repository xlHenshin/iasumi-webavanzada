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
            type: "superior"
            },
            { id: "2",
            name: "Camiseta Inosuke", 
            price: '90000', 
            image: "../public/camisetainosuke.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "superior"
            },
            { id: "3",
            name: "Chaqueta Coraje", 
            price: '160000', 
            image: "../public/chaquetacoraje.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "superior"
            },
            { id: "4",
            name: "Pantuflas Gengar", 
            price: '80000', 
            image: "../public/pantuflasgengar.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "accesorios"
            },
            { id: "5",
            name: "Jogger Carlitos", 
            price: '150000', 
            image: "../public/joggercarlitos.png",
            description: 'Hola soy una descripción de la camiseta',
            type: "accesorios"
            },
        ],
        localStorageProducts: [
            
        ]
    }),
    getters: {
        getProducts: (state) => [...state.products],
    },
    actions: {
        newProduct(product) {
            this.localStorageProducts.push(product)
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts))
        },
        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'))
            this.products = this.products.concat([...this.localStorageProducts])
        },
        getProductById(id) {
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.id.toLowerCase());
            return filteredProducts ? {...filteredProducts[0] } : null
        },
    },
});