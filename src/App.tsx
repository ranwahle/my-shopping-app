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

const useMessageHook = () => {
  const [message, setMessage] = useState('');  
  const updateMessage = (newMessage: string) => setTimeout(() => setMessage(newMessage))
  useEffect(() => {
    messageBroker.subscribe(updateMessage);
    return () => messageBroker.unsubscribe(updateMessage);
  }, [message])

  return message;
} 

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  
  const addProduct = useCallback((product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    console.log(products, product)
    setProducts([...products, {...product}])
  }, [products]);

  const deleteProduct = useCallback( (product: Product) => {
    const newProductsList = products.filter(p => p !== product);
    setProducts( newProductsList)
  }, [products]);

  
  const message = useMessageHook();
  
  useEffect(() => {
    document.title = `There are ${products.length} products`;  
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