import { Product } from './products';
import './ProductComponent.css'
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useProductStatus } from './useProductStatus';

interface ProductComponentProps extends Product {
    deleteProduct: () => void;
  }
  
 const ProductComponent = (product: ProductComponentProps ) => {
    const isOnline = useProductStatus(); 
    return  <div className='container'><div>
    {product?.title}
</div>
<div className={isOnline? 'online': ''}>{product.description}
</div>
<div>
<img src={product.imageUrl} alt={product.description}></img>
</div>
<div>        <Button onClick={product.deleteProduct}>Delete</Button>
</div>
</div>
}


export default React.memo(ProductComponent, (prev, next) => prev.id !== next.id);
