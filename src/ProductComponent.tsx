import { Product } from './products';
import './ProductComponent.css'
import { useEffect } from 'react';
import {useState} from 'react';
import React from 'react';


function randomeIsOnline(): Promise<boolean>  {
    return new Promise(resolve => {
        setTimeout(() => resolve(Math.random() > 0.5), 1000)
    })
}

export const ProductComponent = (product: Product ) => {
    const [isOnline, setIsOnline] = useState(false);
    useEffect(() => {
        randomeIsOnline().then(res => setIsOnline(res));

        return () => {
            console.log('Cleaning up')
        }
    })

    return  <div className='container'><div>
    {product?.title}
</div>
<div className={isOnline? 'online': ''}>{product.description}
</div>
<div>
<img src={product.imageUrl} alt={product.description}></img>
</div>
</div>
}


