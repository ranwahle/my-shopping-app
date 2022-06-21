import { memo, useCallback, useMemo, useState } from 'react';
import AddProduct from './AddProduct';
import ProductComponent from './ProductComponent';
import { Product } from './products';



function ProductsList(props: {
    deleteProduct: (p: Product) => void,
    products: Product[], addProduct: (product: Product) => void}) {
    const {products, addProduct, deleteProduct} = props;
    console.log('I am in memo but runs', products);
    const [sumFibunatchi, setSumFibunatchi] = useState(0);

    function fibunatchi() {
      setSumFibunatchi(fibunatchiIndex(products.length));
    }
    function fibunatchiIndex(index: number): number {
      if (index <= 0) {
        return 0;
      } 
      if (index === 1) {
        return 1;
      }
      return index + fibunatchiIndex(index-1) + fibunatchiIndex(index-2);
    }

    useMemo(fibunatchi, [products.length]);
   // productFibunatchi();
    return (<>
    {sumFibunatchi}
     <div className="App">
            <AddProduct onAddProduct={addProduct}></AddProduct>

      <div className="header">
      <div>Title</div>
      <div>Description</div>
      <div>Image Url</div>
      </div>
      

      {products.map(p => <ProductComponent key={p.id} deleteProduct={() => deleteProduct(p)} {...p} ></ProductComponent>)
      }

     
    </div>
   
    </>);
}

export default memo(ProductsList);