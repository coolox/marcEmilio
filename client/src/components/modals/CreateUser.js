import React, { useState } from "react"
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { registration } from "../../http/userAPI";


const CreateUser = ({show, onHide}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const click = async () =>{
    try {
      const role = () =>  isAdmin? "ADMIN": "USER"
      const response = await registration(userName, password, name, role)
      setUserName('')
      setPassword('')
      setName('')
      onHide()
      setIsAdmin(false)
      console.log(response)
    } catch (e) {
      alert(e.response.data.message)
    }
    
    
    
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
          Добавить Пользователя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
              className="mt-3"
                placeholder="Введите User Name"
                value={userName}
                onChange={e=>setUserName(e.target.value)}
            />
            
            <Row className="d-flex mt-3">
              <Col md={9}>
              <Form.Control
                  /* className="mt-3" */
                  placeholder="Введите Пароль"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  type="password"
              />
              </Col>
              <Col md={3}>
              <Form.Check // prettier-ignore
                  className="mt-1" 
                  type="switch"
                  label={isAdmin? "ADMIN" : "USER"}
                  onChange ={()=> setIsAdmin(!isAdmin)}
             />
              </Col>
            </Row>
            
            <Form.Control
                className="mt-3"
                placeholder="Введите Имя пользователя"
                value={name}
                onChange={e=> setName(e.target.value)}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={click}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default CreateUser;
