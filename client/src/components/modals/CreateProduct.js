import React, { useContext, useState, useEffect } from "react"
import { Modal, Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";
import { COLORS } from "../../utils/consts";
import {fetchManufacturers, fetchBrands, createProduct} from '../../http/productApi'
import { observer } from "mobx-react-lite";

const CreateProduct = observer(({show, onHide}) => {
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brand, setBrand] = useState(null)
    const [manufacturer, setManufacturer] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetchManufacturers().then(data=>product.setManufacturers(data))
        fetchBrands().then(data=>product.setBrands(data))
      },[])

    const addInfo = ()=>{
            setInfo([...info, {title:'', description: '', number: Date.now()}])
    }
    const removeInfo = (number)=>{
            setInfo(info.filter(i=>i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = ()=>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', product.selectedBrand.id)
        formData.append('manufacturerId', product.selectedManufacturer.id )

        createProduct(formData).then(data=>onHide())
    }
  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Выбирите описание продукта
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle variant="secondary">{product.selectedManufacturer.name || 'Выберите Прозводителя'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.manufacturers.map(manufacturer=>
                        <Dropdown.Item 
                            onClick={()=>product.setSelectedManufacturer(manufacturer)} 
                            key={manufacturer.id}
                            >
                                {manufacturer.name}
                            </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle variant="secondary">{product.selectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.brands.map(brand=>
                        <Dropdown.Item 
                            onClick={()=>product.setSelectedBrand(brand)} 
                            key={brand.id}
                            >
                                {brand.name}
                            </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                value={name}
                onChange={e=>setName(e.target.value)}
                className="mt-3"
                placeholder="Введите название продукта"
            />
            <Form.Control
                value={price}
                onChange={e=>setPrice(Number(e.target.value))}
                className="mt-3"
                placeholder="Введите стоимость"
                type="number"
            />
            <Form.Control
                className="mt-3"
                type="file"
                onChange={selectFile}
            />
            <hr/>
            <Button
                variant="outline-dark"
                onClick={addInfo}
            >
                Добавить цвет
            </Button>
            {info.map(i=>
                <Row className="d-flext" key={i.number}>
                    <Col md={4}>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>Выберите цвет</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {COLORS.map(color=>
                                     <Dropdown.Item style={{color: color.color}}>{color.color}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={6}>
                        <Form.Control
                            className="mt-2"
                            type="file"
                            
                         />
                    </Col>
                    <Col md={1} className="p-0 align-items-left">
                        <Button
                            onClick={()=>removeInfo(i.number)}
                            variant="outline-danger"
                            className="mt-2  "
                         >X</Button>
                    </Col>
                </Row>
            )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateProduct;
