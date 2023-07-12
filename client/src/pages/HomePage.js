import React, { useContext, useEffect, useState } from "react"
import { Button, Container,Dropdown, Row, Stack, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Spinner} from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import {fetchManufacturers, fetchBrands, fetchProducts} from '../http/productApi'
import Pages from "../components/Pages";

const HomePage = observer(() => {
  const {product} = useContext(Context)
  const[loading, setLoading] = useState(true)

  useEffect(()=>{
    fetchManufacturers().then(data=>product.setManufacturers(data))
    fetchBrands().then(data=>product.setBrands(data))
    fetchProducts(null, null, 2, 3).then(data=>{
      product.setProducts(data.rows)
      product.setTotalCount(data.count)
      console.log('data in products:', product)
    }).finally(() => setLoading(false))
  },[])

  useEffect(()=>{
    fetchProducts(product.selectedManufacturer.id, product.selectedBrand.id, product.page, product.limit).then(data=>{
      product.setProducts(data.rows)
      console.log("in products:", product.products)
      product.setTotalCount(data.count)
    }).finally(() => setLoading(false))
  }, [product.page, product.selectedManufacturer, product.selectedBrand],)

  if (loading) {
    return <Spinner animation={"grow"}/>
}
  
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <BrandBar/>
        </Col>
        <Col md={9}>
          <Stack direction="horizontal" gap ={3} >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
              <Button variant="outline-success">Search</Button>
            </Form>
            <DropdownButton>Color</DropdownButton>
            <DropdownButton
              variant="secondary"
              title={product.selectedManufacturer.name || 'Прозводитель'}
              data-bs-theme="dark"
            >
              {product.manufacturers.map(manufacturer => 
                  <Dropdown.Item 
                    onClick={()=>product.setSelectedManufacturer(manufacturer)} 
                    key={manufacturer.id}
                  >
                    {manufacturer.name}
                  </Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item onClick={()=>product.setSelectedManufacturer('')} >Все производители</Dropdown.Item>
            </DropdownButton>   
          </Stack>
          <ProductList/>
          <Pages/>
        </Col>
      </Row>
      
      
    </Container>
  )
})

export default HomePage;
