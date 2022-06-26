import { Product } from "./products";
import "./ProductComponent.css";
import React from "react";
import { Button } from "@chakra-ui/react";
import { useProductStatus } from "./useProductStatus";

interface ProductComponentProps extends Product {
  deleteProduct: () => void;
  setEditedProduct: () => void;
}

const ProductComponent = (props: ProductComponentProps) => {
  const isOnline = useProductStatus();
  return (
    <div className="container">
      <div>{props?.title}</div>
      <div className={isOnline ? "online" : ""}>{props.description}</div>
      <div>
        <img src={props.imageUrl} alt={props.description}></img>
      </div>
      <div>
        {" "}
        <Button onClick={props.deleteProduct}>Delete</Button>
      </div>
      <div>
        <Button onClick={props.setEditedProduct}>Edit</Button>
      </div>
    </div>
  );
};

export default React.memo(
  ProductComponent,
  (prev, next) => prev.id !== next.id
);
