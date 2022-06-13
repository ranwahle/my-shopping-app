import React from "react";
import { ChangeEvent, useState } from "react"
import { Product } from './products';

export class AddProduct extends React.Component< {onAddProduct: (product: Product) => void}, Product> {
    
    setTitle = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
        const product = this.state;
        this.setState({...product,title: chnageEvent.target.value} );
    }

    setDescription = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
        const product = this.state;
        this.setState({...product,description: chnageEvent.target.value} );
    }

    setImageUrl = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
        const product = this.state;
        this.setState({...product,imageUrl: chnageEvent.target.value} );
    }

    addProduct = () => {
        this.props.onAddProduct(this.state);
    }



    render() {
        const product = this.state;
        return (<div>
            <label>Title:
            <input type="text" placeholder="title" onChange={this.setTitle} defaultValue={product?.title}></input>
            </label>
            <label>Description:
            <input type="text" placeholder="description" onChange={this.setDescription} defaultValue={product?.description}></input>
            </label>
            <label>Image URL:
            <input type="text" placeholder="image URL" onChange={this.setImageUrl} defaultValue={product?.imageUrl}></input>
            </label>
            <button onClick={this.addProduct}>Add</button>
        </div>)
    }
}
