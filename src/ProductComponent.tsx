import { Product } from './products';
import './ProductComponent.css'
import { useEffect } from 'react';

let onLine = false;

function setIsOnline() {
    onLine = Math.random() > 0.5;
}

export const ProductComponent = (product: Product ) => {
    useEffect(() => setIsOnline())
    return  <div className='container'><div>
    {product?.title}
</div>
<div className={onLine? 'online': ''}>{product.description}
</div>
<div>
<img src={product.imageUrl} alt={product.description}></img>
</div>
</div>
}


