import React, { useState } from 'react';
import * as actionTypes from '../types/shoppingTypes';
import { commerce } from '../../lib/commerce';



// const [products, setProducts] = useState([]);

const INITIAL_STATE = {
    products: [], // {id, title, price, description, img}
    cart: [], // {id, title, price, description, img, qty}
    currentItem: null, // 
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {

            }
        case actionTypes.REMOVE_FROM_CART:
            return {

            }
        
        case actionTypes.ADJUST_QTY:
            return {

            }

        case actionTypes.LOAD_CURRENT_ITEM:
            return {

            }
        
        default:
            return state;
    }
}

export default shopReducer;