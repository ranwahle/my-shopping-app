import React, { useEffect, useState } from 'react';
import { AddProduct } from './AddProduct';
import './App.css';
import { Product } from './products';
import { ProductComponent } from './ProductComponent';
import { Guid } from './guid-util';
import { MessageBroker } from './MessageBroker';

const messageBroker = new MessageBroker();
function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');

  const addProduct = (product: Product) => {
    if (!product.id) {
      product.id = Guid.newGuid();
    }
    setProducts([...products, product])
  }

  const updateMessage = (newMessage: string) => setTimeout(() => setMessage(newMessage))
  
  useEffect(() => {
    messageBroker.subscribe(updateMessage);
    document.title = `There are ${products.length} products`;
    return () => messageBroker.unsubscribe(updateMessage);
  })

  return (
    <div className="App">
            <AddProduct onAddProduct={addProduct}></AddProduct>

      <div className="header">
      <div>Title</div>
      <div>Description</div>
      <div>Image Url</div>
      </div>
      

      {products.map(p => <ProductComponent key={p.id} {...p} ></ProductComponent>)
      }

      {message}
    </div>
  );

}

export default App;
