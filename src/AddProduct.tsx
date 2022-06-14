
import React, { ChangeEvent, useState } from "react"
import { Product } from './products';

export interface AddProductProps {
    onAddProduct: (product: Product) => void;
}
const AddProduct = (props:  {onAddProduct: (product: Product) => void} ) => {
//const AddProduct = (props: AddProductProps ) => {


    const [product, setProduct] = useState<Product>({
        title: '',
        description: '',
        imageUrl: ''
    });
    
    const setTitle = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        setProduct({...product,title: changeEvent.target.value} );
    }

    const setDescription = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        setProduct({...product,description: changeEvent.target.value} );
    }

    const setImageUrl = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        setProduct({...product,imageUrl: changeEvent.target.value} );
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

export default AddProduct;

// export class AddProduct extends React.Component< {onAddProduct: (product: Product) => void}, Product> {
    
//     setTitle = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
//         const product = this.state;
//         this.setState({...product,title: chnageEvent.target.value} );
//     }

//     setDescription = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
//         const product = this.state;
//         this.setState({...product,description: chnageEvent.target.value} );
//     }

//     setImageUrl = (chnageEvent: ChangeEvent<HTMLInputElement>) => {
//         const product = this.state;
//         this.setState({...product,imageUrl: chnageEvent.target.value} );
//     }

//     addProduct = () => {
//         this.props.onAddProduct({...this.state});
//     }



//     render() {
//         const product = this.state;
//         return (<div>
//             <label>Title:
//             <input type="text" placeholder="title" onChange={this.setTitle} defaultValue={product?.title}></input>
//             </label>
//             <label>Description:
//             <input type="text" placeholder="description" onChange={this.setDescription} defaultValue={product?.description}></input>
//             </label>
//             <label>Image URL:
//             <input type="text" placeholder="image URL" onChange={this.setImageUrl} defaultValue={product?.imageUrl}></input>
//             </label>
//             <button onClick={this.addProduct}>Add</button>
//         </div>)
//     }
// }
