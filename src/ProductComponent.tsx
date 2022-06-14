import { Product } from "./products";
import "./ProductComponent.css";
import React from "react";

interface ProductComponentProps {
  deleteProduct: () => void;
  product: Product;
}

function ProductComponent(props: ProductComponentProps) {
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

export default React.memo(ProductComponent)