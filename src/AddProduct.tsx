
import React, { ChangeEvent, useRef, useState } from "react"
import { Button, Input } from '@chakra-ui/react'
import { Product } from './products';

export interface AddProductProps {
    onAddProduct: (product: Product) => void;
}
const AddProduct = (props: AddProductProps ) => {

    const titleRef = useRef(null);

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
        if (!product.title) {
            (titleRef.current as unknown as HTMLElement).focus();
            return;
        }
        props.onAddProduct({...product});
    }

    return (<div>
        <label>Title:
        <Input type="text" ref={titleRef} placeholder="title" 
        onChange={setTitle} defaultValue={product?.title}></Input>
        </label>
        <label>Description:
        <Input type="text" placeholder="description" onChange={setDescription} defaultValue={product?.description}></Input>
        </label>
        <label>Image URL:
        <Input type="text" placeholder="image URL" onChange={setImageUrl} defaultValue={product?.imageUrl}></Input>
        </label>
        <Button onClick={addProduct}>Add</Button>
    </div>)
}

export default React.memo(AddProduct);

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
