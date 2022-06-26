import "./App.css";
import "./App.css";
import { Guid } from "./guid-util";
import { Alert, AlertTitle, ChakraProvider, theme } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import "./App.css";
import { Product } from "./products";
import { MessageBroker } from "./MessageBroker";
import { Store } from "redux";
import { ProductAction, RootState, EditedProductAction } from './root-reducer';
import EditProduct from "./EditProduct";

const messageBroker = new MessageBroker();

export default function App(props: { store: Store<RootState, ProductAction | EditedProductAction > }) {
  const [message, setMessage] = useState("");
  const { store } = props;
  const state = store.getState();
  const [products, setProducts] = useState(state.products);
  const [editedProduct, setEditedProduct] = useState(state.editedProduct);

  const editProduct = (product: Product) => {
    store.dispatch({type: 'EditedProduct-Set', payload: product})
  }
  const addProduct = (product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    store.dispatch({ type: "List-Add", payload: product });
  };

  const deleteProduct = (product: Product) => {
    store.dispatch({ type: "List-Remove", payload: product });
  };

  const onSaveProduct = (product: Product) => { 
    store.dispatch({type: 'List-Update', payload: product});
    store.dispatch({type: 'EditedProduct-Reset', payload: null})

  }
  const updateMessage = (newMessage: string) =>
    setTimeout(() => setMessage(newMessage));

  useEffect(() => {
    messageBroker.subscribe(updateMessage);
    return () => messageBroker.unsubscribe(updateMessage);
  }, [message]);

 

  useEffect(() => {
    const storeSubscriber = () => {
      const {products, editedProduct} = store.getState();
      setProducts(products);
      setEditedProduct(editedProduct);
    };
    //setProducts(store.getState().products)
    document.title = `There are ${products.length} products`;
    return store.subscribe(storeSubscriber);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Alert status="error">
        <AlertTitle>{message}</AlertTitle>
      </Alert>
      <ProductsList
        products={products}
        setEditedProduct={editProduct}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
      ></ProductsList>
      {editedProduct? <EditProduct product={editedProduct} saveProduct={onSaveProduct}></EditProduct> : null}
    </ChakraProvider>
  );
}
