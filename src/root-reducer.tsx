import { Action, combineReducers } from "redux";
import { Product } from "./products";

export interface RootState { 
    products: Product[];
    editedProduct?: Product | null;
}

export interface ProductAction extends Action<'List-Add' | 'List-Remove' | 'List-Update'> {
   // type: 'Add' | 'Remove';
    payload: Product;
}

export interface EditedProductAction extends Action<'EditedProduct-Set' | 'EditedProduct-Reset'> {
    payload: Product | null;
}
const initialProductsState: Product[] = [];

const initialEditedProductState: Product | null = null;


const actionTypeToActions: {[type: string] : 
    (products: Product[], product: Product) => Product[] } =  {
    'List-Add' : (products: Product[], product: Product) => (
        [...products, product]),
    'List-Remove' : (products: Product[], product: Product) => (
         [...products.filter(p => p.id !== product.id)]),
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



export const rootReducer = combineReducers({products: productsReducer, editedProduct: editedProductReducer});


export function editedProductReducer(state: Product | null = initialEditedProductState, 
    action: EditedProductAction ) {
    switch(action.type) {
        case 'EditedProduct-Set': {
            return action.payload;
        }
        case 'EditedProduct-Reset': {
            return null;
        }
        default: {
            return state;
        }
    }
}


export function productsReducer(state: Product[] = initialProductsState, action: ProductAction ) {
    const func = actionTypeToActions[action.type];
    if (!func) {
        return state;
    }
    return func(state, action.payload);
}

