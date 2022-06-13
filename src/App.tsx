import React from 'react';
import { AddProduct } from './AddProduct';
import './App.css';
import { Product } from './products';
import { ProductComponent } from './ProductComponent';

class App extends React.Component<{}, Product[]> {
  addProduct = (product: Product) => {
    this.setState([...this.state, product]);
  }

  render() {
  return (
    <div className="App">
      {this.state.map(p => <ProductComponent {...p} ></ProductComponent>)
      }
      <AddProduct onAddProduct={this.addProduct}></AddProduct>
    </div>
  );
    }
}

export default App;
