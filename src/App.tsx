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
import { ProductAction, RootState } from "./root-reducer";

const messageBroker = new MessageBroker();

export default function App(props: { store: Store<RootState, ProductAction> }) {
  const [message, setMessage] = useState("");
  const { store } = props;
  const [products, setProducts] = useState(store.getState().products);

  const setEditedProduct = (product: Product) => {

  }
  const addProduct = (product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    store.dispatch({ type: "Add", payload: product });
  };

  const deleteProduct = (product: Product) => {
    store.dispatch({ type: "Remove", payload: product });
  };

  const updateMessage = (newMessage: string) =>
    setTimeout(() => setMessage(newMessage));

  useEffect(() => {
    messageBroker.subscribe(updateMessage);
    return () => messageBroker.unsubscribe(updateMessage);
  }, [message]);

 

  useEffect(() => {
    const storeSubscriber = () => {
      setProducts(store.getState().products);
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
        setEditedProduct={setEditedProduct}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
      ></ProductsList>
    </ChakraProvider>
  );
}
