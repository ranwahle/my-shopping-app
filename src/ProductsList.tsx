import { memo, useCallback, useMemo, useState } from 'react';
import AddProduct from './AddProduct';
import ProductComponent from './ProductComponent';
import { Product } from './products';

const TextNumbers: {[index: number]  : string} = {
  1: 'One', 
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten'

}

function ProductsList(props: {
    deleteProduct: (p: Product) => void,
    products: Product[], addProduct: (product: Product) => void, 
    setEditedProduct: (product: Product) => void}) {
    const {products, addProduct, deleteProduct, setEditedProduct} = props;
   
    const listHeader: () => string  = () => {
      return  TextNumbers[products.length];
    }
    return (<>
    {useMemo(listHeader, [products.length])} products
     <div className="App">
            <AddProduct onAddProduct={addProduct}></AddProduct>

      <div className="header">
      <div>Title</div>
      <div>Description</div>
      <div>Image Url</div>
      </div>
      

      {products.map(p => <ProductComponent key={p.id} deleteProduct={() => deleteProduct(p)} setEditedProduct={() => setEditedProduct(p)}
       {...p} ></ProductComponent>)
      }

     
    </div>
   
    </>);
}

export default memo(ProductsList);