import './App.css';
import './App.css';
import { Guid } from './guid-util';
import { Alert, AlertTitle, ChakraProvider, theme } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import './App.css';
import { Product } from './products';
import { MessageBroker } from './MessageBroker';

const messageBroker = new MessageBroker(); 

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');  
 
  const addProduct =   (product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    console.log(products, product)
    setProducts([...products, {...product}])
  };

  const deleteProduct = (product: Product) => {
    const newProductsList = products.filter(p => p !== product);
    setProducts( newProductsList)
  };

  const updateMessage = (newMessage: string) => setTimeout(() => setMessage(newMessage))
  
  useEffect(() => {
    messageBroker.subscribe(updateMessage);
    document.title = `There are ${products.length} products`;
    return () => messageBroker.unsubscribe(updateMessage);
  })

 
  
  return (
    <ChakraProvider theme={theme}>
 <Alert status='error'>
        <AlertTitle>{message}</AlertTitle>
        </Alert> 
        <ProductsList products={products} addProduct={addProduct}
        deleteProduct={deleteProduct}
         ></ProductsList>
    </ChakraProvider>)
}