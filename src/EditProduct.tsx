import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { Product } from "./products";
import {useState} from "react";

const EditProduct = (props: {
  product: Product;
  saveProduct: (p: Product) => void;
}) => {
  const { product, saveProduct } = props;

  const [prodCandidate, setProdCandidate] = useState({ ...product });
  const setTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setProdCandidate({...prodCandidate, title : evt.target.value});
  };
  const setDescription = (evt: ChangeEvent<HTMLInputElement>) => {
    setProdCandidate({...prodCandidate, description : evt.target.value});
  };

  const setImageUrl = (evt: ChangeEvent<HTMLInputElement>) => {
    setProdCandidate({...prodCandidate, imageUrl : evt.target.value});
  };

  const onSaveClick = () => {
    saveProduct(prodCandidate);
  };

  return (
    <div>
      <label>
        Title:
        <Input
          type="text"
          placeholder="title"
          onChange={setTitle}
          defaultValue={product?.title}
        ></Input>
      </label>
      <label>
        Description:
        <Input
          type="text"
          placeholder="description"
          onChange={setDescription}
          defaultValue={product?.description}
        ></Input>
      </label>
      <label>
        Image URL:
        <Input
          type="text"
          placeholder="image URL"
          onChange={setImageUrl}
          defaultValue={product?.imageUrl}
        ></Input>
      </label>
      <Button onClick={onSaveClick}>Save</Button>
    </div>
  );
};

export default EditProduct;
