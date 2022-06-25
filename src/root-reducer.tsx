import { Action } from "redux";
import { Product } from "./products";

export interface RootState { 
    products: Product[];
}

export interface ProductAction extends Action<'Add' | 'Remove'> {
   // type: 'Add' | 'Remove';
    payload: Product;
}
const initialState: RootState = {
    products: []
}

const actionTypeToActions: {[type: string] : (products: Product[], product: Product) => RootState } =  {
    'Add' : (products: Product[], product: Product) => ({
        products: [...products, product]}),
    'Remove' : (products: Product[], product: Product) => ({
        products: [...products.filter(p => p.id !== product.id)]}),
}


export function rootReducer(state: RootState = initialState, action: ProductAction ) {
    const func = actionTypeToActions[action.type];
    if (!func) {
        return state;
    }
    return func(state.products, action.payload);
    
}