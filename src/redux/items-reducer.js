import { productsAPI } from "../_api/api"

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const ADD_CATEGORY = 'ADD_CATEGORY'

let initialState = {
    categories: [],
    products: [],
    limitPerPage: 5,
    totalItemsCount: 0,
    currentPage: 1,
    productsInCart: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY: 
            return {
                ...state,
                categories: [action.list],
            }
        case ADD_TO_CART:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.item],
                products: [...state.products, ...state.products[action.index].isAddedToCart = true]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.item],
                products: [...state.products, ...state.products.isAddedToCart = false]
            }

        default:
            return state

    }
}

export const setCategories = (list) => ({ type: ADD_CATEGORY, list})

export const getCategories = () => {
    return async (dispatch) => {
        let response = await productsAPI.getCategories();
        return dispatch(setCategories(response))
    }
}

export default itemsReducer;