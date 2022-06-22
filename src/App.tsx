import './App.css';
import './App.css';
import { Guid } from './guid-util';
import { Alert, AlertTitle, ChakraProvider, theme } from '@chakra-ui/react';
import { useEffect, useState, useReducer } from 'react';
import ProductsList from './ProductsList';
import './App.css';
import { Product } from './products';
import { useMessage } from './use-message-hook';

const productsReducer = (state: Product[], action: {type: 'add' | 'remove', payload: Product} ) => {
  switch(action.type) {
    case 'add': {
      return [...state, action.payload];
    } case 'remove': {
      return [...state.filter(product => product !== action.payload)];
    }
  }
}


export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productState, productDispatch] = useReducer(productsReducer, []);
  const message = useMessage();

  const addProduct = (product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    productDispatch({type: 'add', payload: product});
  };

  const deleteProduct = (product: Product) => {
    productDispatch({type: 'remove', payload: product})
  };


  
  useEffect(() => {
   
    document.title = `There are ${products.length} products`;

  })

 
  
  return (
    <ChakraProvider theme={theme}>
 <Alert status='error'>
        <AlertTitle>{message}</AlertTitle>
        </Alert> 
        <ProductsList products={productState} addProduct={addProduct}
        deleteProduct={deleteProduct}
         ></ProductsList>
    </ChakraProvider>)
}