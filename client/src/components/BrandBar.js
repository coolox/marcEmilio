import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Context } from "..";
import ListGroup from 'react-bootstrap/ListGroup'

const BrandBar = observer(() => {
    const {product} = useContext(Context)
    //console.log('brands', product.brands)
    
  return (
    <ListGroup>
        <ListGroup.Item 
          style={{cursor: "pointer"}}
          active={!product.selectedBrand.id}
          onClick={()=> product.setSelectedBrand('')}
        >Все брэнды
        </ListGroup.Item>
        {product.brands.map(brand=>
        <ListGroup.Item 
            style={{cursor: "pointer"}}
            active={brand.id === product.selectedBrand.id}
            onClick={()=> product.setSelectedBrand(brand)}
            key={brand.id}
        >
            {brand.name}
        </ListGroup.Item>)}
    </ListGroup>
  )
})

export default BrandBar;
