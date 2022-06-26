import { Action } from 'redux';
import { Product } from "./products";

export interface ProductAction extends Action<'List-Add' | 'List-Remove' | 'List-Update'> {
    // type: 'Add' | 'Remove';
     payload?: Product;
 }

const initialProductsState: Product[] = [];

const actionTypeToActions: {[type: string] : 
    (products: Product[], product: Product) => Product[] } =  {
    'List-Add' : (products: Product[], product: Product) => [...products, product],
    'List-Remove' : (products: Product[], product: Product) => [...products.filter(p => p.id !== product.id)],
    'List-Update' : (products: Product[], product: Product) => {
        const existingProdIndex = products.findIndex(p => p.id === product.id);
        if (existingProdIndex < 0) {
            return products;
        }
        const newList = [...products];
         newList.splice(existingProdIndex, 1, product);  
         return newList; 
    }
}


export function productsReducer(state: Product[] = initialProductsState, action: ProductAction ) {
    const func = actionTypeToActions[action.type];
    if (!func) {
        return state;
    }
    return func(state, action.payload!);
}