import React, { useState } from 'react';
import AddProduct from './AddProduct';
import './App.css';
import { Product } from './products';
import { ProductComponent } from './ProductComponent';

export default function App() {
  const [products, setProucts] = useState<Product[]>([]);
 
  const addProduct = (product: Product) => {
    setProucts([...products, {...product}])
  }

  const deleteProduct = (product: Product) => {
    const newProductsList = products.filter(p => p !== product);
    setProucts( newProductsList)
  }


  return (
    <div className="App">
            <AddProduct onAddProduct={addProduct}></AddProduct>
      {products.map((p, index) => 
      <ProductComponent key={index} product={p} deleteProduct={() => deleteProduct(p)} ></ProductComponent>)
      }
    </div>)
}


