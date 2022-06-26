import "./App.css";
import "./App.css";
import { Guid } from "./guid-util";
import { Alert, AlertTitle, ChakraProvider, theme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import "./App.css";
import { Product } from "./products";
import { MessageBroker } from "./MessageBroker";
import { Store } from "redux";
import { RootState } from './root-reducer';
import EditProduct from "./EditProduct";
import { ProductAction } from "./products-list-reducer";
import { EditedProductAction } from "./edited-product-reducer";
import { MessageAction } from './messags-reducer';

const messageBroker = new MessageBroker();

export default function App(props: { store: Store<RootState, ProductAction | EditedProductAction | MessageAction > }) {
  const { store } = props;
  const state = store.getState();
  const [message, setMessage] = useState(state.message);
  const [products, setProducts] = useState(state.products);

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

 
  const updateMessage = (newMessage: string) =>
    setTimeout(() => store.dispatch({type: 'Message-Add', messagePayload: newMessage}));

  useEffect(() => {
    messageBroker.subscribe(updateMessage);
    return () => messageBroker.unsubscribe(updateMessage);
  }, [message]);

 

  useEffect(() => {
    const storeSubscriber = () => {
      const {products, message} = store.getState();
      setProducts(products);
      setMessage(message);
    };
    //setProducts(store.getState().products)
    document.title = `There are ${products.length} products`;
    return store.subscribe(storeSubscriber);
  }, [products.length, message]);

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
      <EditProduct store={store}></EditProduct>

    </ChakraProvider>
  );
}
