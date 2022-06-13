import { Product } from './products';
import './ProductComponent.css'
import React from 'react';

export const ProductComponent = (product: Product ) => {
    return  <div className='container'><div>
    {product?.title}
</div>
<div>{product.description}
</div>
<div>
<img src={product.imageUrl} alt={product.description}></img>
</div>
</div>
}


