import React from "react";
import { ChangeEvent, useState } from "react"
import { Product } from './products';

export function AddProduct(props: {onAddProduct: (product: Product) => void}) {

    const [product, setProduct] = useState<Product>({title: '', imageUrl: '', description: ''})

    const setTitle = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
        setProduct({...product,title: chnageEvent.target.value} );
    }

    const setDescription = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
        
        setProduct({...product,description: chnageEvent.target.value} );
    }

    const setImageUrl = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
         setProduct({...product,imageUrl: chnageEvent.target.value} );
    }

    const addProduct = () => {
        props.onAddProduct({...product});
    }

    return (<div>
        <label>Title:
        <input type="text" placeholder="title" onChange={setTitle} defaultValue={product?.title}></input>
        </label>
        <label>Description:
        <input type="text" placeholder="description" onChange={setDescription} defaultValue={product?.description}></input>
        </label>
        <label>Image URL:
        <input type="text" placeholder="image URL" onChange={setImageUrl} defaultValue={product?.imageUrl}></input>
        </label>
        <button onClick={addProduct}>Add</button>
    </div>)

}

