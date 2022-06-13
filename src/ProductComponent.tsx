import { Product } from './products';
import './ProductComponent.css'
import React from 'react';

export class ProductComponent extends React.Component<Product> {

    componentWillMount() {
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
        const product = this.props;
        return <div className='container'><div>
        {product?.title}
    </div>
    <div>{product.description}
</div>
<div>
    <img src={product.imageUrl} alt={product.description}></img>
</div>
</div>

    }
}
