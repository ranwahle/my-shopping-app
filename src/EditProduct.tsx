import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { Product } from "./products";
import {useState} from "react";
import { EditedProductAction } from "./edited-product-reducer";
import { ProductAction } from "./products-list-reducer";
import { RootState } from "./root-reducer";
import { Store} from 'redux';
import {useEffect} from 'react';

const EditProduct = (props: {
    store: Store<RootState, ProductAction | EditedProductAction >
}) => {
  const { store } = props;

  const state = store.getState();
  const [prodCandidate, setProdCandidate] = useState(state.editedProduct?  {...state.editedProduct}: null);
 
  const setTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setProdCandidate({...prodCandidate!, title : evt.target.value});
  };
  const setDescription = (evt: ChangeEvent<HTMLInputElement>) => {
    setProdCandidate({...prodCandidate!, description : evt.target.value});
  };

  const setImageUrl = (evt: ChangeEvent<HTMLInputElement>) => {
    setProdCandidate({...prodCandidate!, imageUrl : evt.target.value});
  };

  const onSaveClick = () => {
    store.dispatch({type: 'List-Update', payload: prodCandidate as Product})
    store.dispatch({type: 'EditedProduct-Reset', payload: null})
  };

  const onCancelClick = () => {
    store.dispatch({type: 'EditedProduct-Reset', payload: null})
  }

  useEffect(() => {
    return store.subscribe(() => {
        const state = store.getState();
        setProdCandidate(state.editedProduct? {...state.editedProduct} : null);
    })
  });

  if (!prodCandidate) {
    return null;
  }
  
  return (
    <div>
      <label>
        Title:
        <Input
          type="text"
          placeholder="title"
          onChange={setTitle}
          defaultValue={prodCandidate?.title}
        ></Input>
      </label>
      <label>
        Description:
        <Input
          type="text"
          placeholder="description"
          onChange={setDescription}
          defaultValue={prodCandidate?.description}
        ></Input>
      </label>
      <label>
        Image URL:
        <Input
          type="text"
          placeholder="image URL"
          onChange={setImageUrl}
          defaultValue={prodCandidate?.imageUrl}
        ></Input>
      </label>
      <Button onClick={onSaveClick}>Save</Button>
      <Button onClick={onCancelClick}>Cancel</Button>

    </div>
  );
};

export default EditProduct;
