import { Action } from 'redux';
import { Product } from './products';

export interface EditedProductAction extends Action<'EditedProduct-Set' | 'EditedProduct-Reset'> {
    payload?: Product | null;
}

const initialEditedProductState: Product | null = null;

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

