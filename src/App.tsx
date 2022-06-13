import React, { useState } from 'react';
import { AddProduct } from './AddProduct';
import './App.css';
import { Product } from './products';
import { ProductComponent } from './ProductComponent';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product])
  }


  return (
    <div className="App">
      {products.map(p => <ProductComponent {...p} ></ProductComponent>)
      }
      <AddProduct onAddProduct={addProduct}></AddProduct>
    </div>
  );

}

export default App;
