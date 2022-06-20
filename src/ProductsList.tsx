import { memo } from 'react';
import AddProduct from './AddProduct';
import ProductComponent from './ProductComponent';
import { Product } from './products';
function ProductsList(props: {
    deleteProduct: (p: Product) => void,
    products: Product[], addProduct: (product: Product) => void}) {
    const {products, addProduct, deleteProduct} = props;
    console.log('I am in memo but runs', products);

    return (<>
     <div className="App">
            <AddProduct onAddProduct={addProduct}></AddProduct>

      <div className="header">
      <div>Title</div>
      <div>Description</div>
      <div>Image Url</div>
      </div>
      

      {products.map(p => <ProductComponent key={p.id} deleteProduct={() => deleteProduct(p)} {...p} ></ProductComponent>)
      }

     
    </div>
   
    </>);
}

export default memo(ProductsList);