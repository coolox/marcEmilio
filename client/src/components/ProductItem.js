import React, {useEffect, useState} from "react"
import { Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import { useNavigate } from "react-router-dom";
import {fetchBrands} from '../http/productApi'
import { PRODUCT_ROUTE } from "../utils/consts";

const ProductItem = ({product}) => {
    const [brand, setBrand]= useState()
    const navigate = useNavigate()

    console.log('products id', product.id)
    useEffect(()=>{
        fetchBrands().then(data=>data.find(item=> item.id === product.brandId).name)
        .then(data=> setBrand(data))
      },[])
      
    return (
        <Col md={3} className="mt-3" onClick={()=>navigate(PRODUCT_ROUTE + "/" + product.id)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} hight={150} src={process.env.REACT_APP_API_URL + product.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{brand}</div>
                    {/* <div> 
                    {product.collors.map((color)=> 
                        <Figure.Image
                        roundedCircle
                        width={10}
                        height={10}
                        border={6}
                        key={color}
                        style={{color}}
                    />
                        )} 
                    </div> */}
                    
                </div>
                <h5>{product.name}</h5>
            </Card>
        </Col>
    )
    }

    export default ProductItem;


   