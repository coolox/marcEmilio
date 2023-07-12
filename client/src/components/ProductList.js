import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Context } from "..";
import { Row } from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = observer(() => {
    const{product} = useContext(Context)
    //const br = product.products
    //console.log('products:', product.products)
    
  return (
    <Row className="d-flex">
      {product.products.map(product =>
        <ProductItem key={product.id} product={product}/>
      )}
    </Row>
  )
})

export default ProductList;
