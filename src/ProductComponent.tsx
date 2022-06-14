import { Product } from "./products";
import "./ProductComponent.css";
import React from "react";

interface ProductComponentProps {
  deleteProduct: () => void;
  product: Product;
}

export function ProductComponent(props: ProductComponentProps) {
  const { product } = props;
  return (
    <div className="container">
      <div>{product?.title}</div>
      <div>{product.description}</div>
      <div>
        <img src={product.imageUrl} alt={product.description}></img>
      </div>
      <div>
        <button onClick={props.deleteProduct}>Delete</button>
      </div>
    </div>
  );
}
// export class ProductComponent extends React.Component<ProductComponentProps> {

//     componentWillMount() {
//         console.log(Date.now(), 'will mount')
//       }

//       componentWillUnmount() {
//         console.log(Date.now(), 'will unmount')
//       }

//       componentDidMount() {
//         console.log(Date.now(), 'did mount')

//       }

//       componentWillUpdate() {
//         console.log(Date.now(), 'will update')
//       }

//       componentDidUpdate() {
//         console.log(Date.now(), 'did update', this.props)

//       }

//       onDeleteProduct()  {
//         this.props.deleteProduct();
//       }

//     render() {
//         const {product} = this.props;
//         return <div className='container'><div>
//         {product?.title}
//     </div>
//     <div>{product.description}
// </div>
// <div>
//     <img src={product.imageUrl} alt={product.description}></img>
// </div>
// <div>
//     <button onClick={this.onDeleteProduct.bind(this)} >Delete</button>
// </div>
// </div>

//     }
// }
