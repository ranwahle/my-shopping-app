import { Product } from "./products";
import "./ProductComponent.css";
import React from "react";
import "./ProductComponent.css";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

function randomeIsOnline(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random() > 0.5), 1000);
  });
}
interface ProductComponentProps extends Product {
  deleteProduct: () => void;
}

const ProductComponent = (product: ProductComponentProps) => {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    randomeIsOnline().then((res) => setIsOnline(res));

    return () => {
      console.log("Cleaning up");
    };
  });

  return (
    <div className="container">
      <div>{product?.title}</div>
      <div className={isOnline ? "online" : ""}>{product.description}</div>
      <div>
        <img src={product.imageUrl} alt={product.description}></img>
      </div>
      <div>
        <Button onClick={product.deleteProduct}>Delete</Button>
      </div>
    </div>
  );
};

export default React.memo(ProductComponent, (prev, next) => prev.id !== next.id);
