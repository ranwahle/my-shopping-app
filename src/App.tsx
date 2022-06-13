import React from 'react';
import { AddProduct } from './AddProduct';
import './App.css';
import { useState } from 'react';
import { Products, Product } from './products';
import { ProductComponent } from './ProductComponent';

function App() {
  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  }
  const [products, setProducts] = useState(Products)
  return (
    <div className="App">
      {products.map(p => ProductComponent(p))
      }
      <AddProduct onAddProduct={addProduct}></AddProduct>
    </div>
  );
}

export default App;
