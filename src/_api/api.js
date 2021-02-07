import * as axios from 'axios';

let instance = axios.create({
    withCredentials: false,
    baseURL: 'https://fakestoreapi.com/',
})

export const productsAPI = {
    getCategories() {
        return instance.get('products/categories').then(response => response.json())
    },
    getProductsByCategory(category) {
        return instance.get(`products/category/${category}`).then(response => response.json())
    }
}
