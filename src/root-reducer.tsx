import { Action, combineReducers } from "redux";
import { Product } from "./products";

export interface RootState { 
    products: Product[];
}

export interface ProductAction extends Action<'Add' | 'Remove'> {
   // type: 'Add' | 'Remove';
    payload: Product;
}

const initialProductsState: Product[] = [];


const initialState: RootState = {
    products: initialProductsState
}




const actionTypeToActions: {[type: string] : 
    (products: Product[], product: Product) => Product[] } =  {
    'Add' : (products: Product[], product: Product) => (
        [...products, product]),
    'Remove' : (products: Product[], product: Product) => (
         [...products.filter(p => p.id !== product.id)]),
}


export const rootReducer = combineReducers({products: productsReducer});
  

export function productsReducer(state: Product[] = initialProductsState, action: ProductAction ) {
    const func = actionTypeToActions[action.type];
    if (!func) {
        return state;
    }
    return func(state, action.payload);
}