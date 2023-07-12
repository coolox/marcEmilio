import React, { useState } from "react"
import { Modal,Form, Button } from "react-bootstrap";
import { createManufacturer } from "../../http/productApi";

const CreateManufacturer = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addManufacturer = () =>{
    createManufacturer({name: value}).then( data => {
      setValue('')
      onHide()
  })
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
          Добавить Производителя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                value={value}
                onChange={e=> setValue(e.target.value)}
                placeholder="Введите название производителя"
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addManufacturer}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default CreateManufacturer;
