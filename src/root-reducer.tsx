import { combineReducers } from "redux";
import { editedProductReducer } from "./edited-product-reducer";
import { messageReducder } from "./messags-reducer";
import { Product } from "./products";
import { productsReducer } from "./products-list-reducer";

export interface RootState { 
    products: Product[];
    editedProduct?: Product | null;
    message: string | null;
}


export const rootReducer = combineReducers({products: productsReducer, editedProduct: editedProductReducer
, message: messageReducder});






