const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

let initialState = {
    products: [],
    pages: 10,
    totalItemsCount: 0,
    currentPage: 1,
    productsInCart: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
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
                products: [...state.products, ...state.productsitemsReducer.isAddedToCart = false]
            }
    }
}

export default itemsReducer