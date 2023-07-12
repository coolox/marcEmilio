import React, {useEffect, useState} from "react"
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import Figure from "react-bootstrap/Figure"
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel'
import {useParams} from 'react-router-dom'
import { fetchOneProduct } from "../http/productApi";

const ProductPage = () => {
  const [product, setProduct] = useState({info: []})
  const {id} = useParams()

  useEffect(()=>{
      fetchOneProduct(id).then(data => setProduct(data))
      
  },[])

    
  return (
    <Container>
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
          </Col>
          <Col md={4}>
            <Row>
              <h2>{product.name}</h2>
              <div>
              {product.info.map((product)=> 
                              <div>
                                  <Figure.Image
                                    width={10}
                                    height={10}
                                    border={20}
                                    key={product.id}
                                    style={{color: product.color}}
                                  /> {product['pcs']}
                              </div>
                )}
              </div>
              <div>Name: {product.name}</div>
              <div>Brand: {product.brandId}</div>
              <div>Manufacturer: {product.manufacturerId}</div>
              <div>Price: {product.price}</div>
            </Row>
          </Col>
          <Col md={4}>
                <Card 
                  style={{width: 300, height:300, fontSize:32, border:"5px solid lightgray"}} 
                  className="d-flex flex-column align-items-center justify-content-around">
                  <h4>Sell Information</h4>
                  <Form className="d-flex align-items-center p-4" >
                    <h5 style={{margin:5}}>Price: </h5>
                    <Form.Control/>
                    <Dropdown >
                      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        $
                      </Dropdown.Toggle>
                    </Dropdown>
                  </Form>
                  <Button variant="outline-dark p-2" size="lg" className="mt-1"> Sell </Button>
                </Card>
          </Col>
        </Row>
      </Container>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    
  )
};

export default ProductPage;
