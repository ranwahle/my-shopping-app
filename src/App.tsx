import AddProduct from './AddProduct';
import './App.css';
import { Product } from './products';
import  ProductComponent from './ProductComponent';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Guid } from './guid-util';
import { ChakraProvider, theme } from '@chakra-ui/react';

export default function App() {
  const [products, setProucts] = useState<Product[]>([]);
 
  const addProduct = (product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    setProucts([...products, {...product}])
  }

  const deleteProduct = (product: Product) => {
    const newProductsList = products.filter(p => p !== product);
    setProucts( newProductsList)
  }


  useEffect(() => {
    document.title = `There are ${products.length} products`;
  })
  
  return (
    <ChakraProvider theme={theme}>

    <div className="App">
            <AddProduct onAddProduct={addProduct}></AddProduct>
      {products.map((p, index) => 
      <ProductComponent key={p.id} {...p} deleteProduct={() => deleteProduct(p)} ></ProductComponent>)
      }
    </div>
    </ChakraProvider>)
}