import { Action, combineReducers } from "redux";
import { editedProductReducer } from "./edited-product-reducer";
import { Product } from "./products";
import { productsReducer } from "./products-list-reducer";

export interface RootState { 
    products: Product[];
    editedProduct?: Product | null;
}




export const rootReducer = combineReducers({products: productsReducer, editedProduct: editedProductReducer});






