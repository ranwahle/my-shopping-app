import React, { useEffect, useState } from 'react';
import { AddProduct } from './AddProduct';
import './App.css';
import { Product } from './products';
import { ProductComponent } from './ProductComponent';
import { Guid } from './guid-util';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    setProducts([...products, product])
  }


  useEffect(() => {
    document.title = `There are ${products.length} products`;})

  return (
    <div className="App">
      <div className="header">
      <div>Title</div>
      <div>Description</div>
      <div>Image Url</div>
      </div>
      

      {products.map(p => <ProductComponent key={p.id} {...p} ></ProductComponent>)
      }
      <AddProduct onAddProduct={addProduct}></AddProduct>
    </div>
  );

}

export default App;
