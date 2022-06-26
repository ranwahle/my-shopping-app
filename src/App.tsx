import './App.css';
import './App.css';
import { Guid } from './guid-util';
import { Alert, AlertTitle, ChakraProvider, theme } from '@chakra-ui/react';
import { useEffect, useState, useReducer } from 'react';
import ProductsList from './ProductsList';
import './App.css';
import { Product } from './products';
import { useMessage } from './use-message-hook';


const productActionsDict: {[key: string] : (state: Product[], payload: Product) => Product[]} = {

  'add': (state, payload) => [...state, payload ],
  'remove': (state, payload) => [...state.filter(p => p !== payload)]
}

type ActionType = {type: 'add' | 'remove', payload: Product};

const productsReducer = (state: Product[], action:ActionType ) => {
  const func = productActionsDict[action.type];
  if (!func) {
    return state;
  }
  return func(state, action.payload)
}


export default function App() {
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
   
    document.title = `There are ${productState.length} products`;

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