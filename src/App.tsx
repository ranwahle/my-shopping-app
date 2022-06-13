import React from 'react';
import { AddProduct } from './AddProduct';
import './App.css';
import { Product } from './products';
import { ProductComponent } from './ProductComponent';

class App extends React.Component<{}, {products: Product[]}> {
  addProduct = (product: Product) => {
    let {products} = this.state;
    if (!Array.isArray(products)) {
      products = [];
    }
    this.setState({products: [...products, product]});
  }

  constructor() {
    super({})
  }

  componentWillMount() {
    this.setState({products: []})
    console.log(Date.now(), 'will mount')
  }

  componentWillUnmount() {
    console.log(Date.now(), 'will unmount')
  }

  componentDidMount() {
    console.log(Date.now(), 'did unmount')

  }

  componentWillUpdate() {
    console.log(Date.now(), 'will update')
  }

  componentDidUpdate() {
    console.log(Date.now(), 'did update', this.state)

  }

  render() {
     let {products} = this.state;
    if (!Array.isArray(products)) {
      products = [];
    }
  return (
    <div className="App">
      {products.map(p => <ProductComponent {...p} ></ProductComponent>)
      }
      <AddProduct onAddProduct={this.addProduct}></AddProduct>
    </div>
  );
    }
}

export default App;
