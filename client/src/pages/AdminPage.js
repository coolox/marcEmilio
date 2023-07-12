import React, { useState } from "react"
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateManufacturer from "../components/modals/CreateManufacturer";
import CreateProduct from "../components/modals/CreateProduct";
import CreateUser from "../components/modals/CreateUser";
import EditUsers from "../components/modals/EditUsers";

const AdminPage = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [manufacturerVisible, setManufacturerVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [userVisible, setUserVisible] = useState(false)
  const [editUserVisible, setEditUserVisible] = useState(false)
  return (
    <Container className="d-flex flex-column">
      <Button 
        variant={"outline-dark"} 
        className="mt-2 p-2"
        onClick={()=> setBrandVisible(true)}
      >
        Добавить Брэнд
      </Button>
      <Button 
        variant={"outline-dark"} 
        className="mt-2 p-2"
        onClick={()=> setManufacturerVisible(true)}
      >
        Добавить Производителя
      </Button>
      <Button 
        variant={"outline-dark"} 
        className="mt-2 p-2"
        onClick={()=> setProductVisible(true)}
      >
        Добавить Продукт
      </Button>
      <Button 
        variant={"outline-dark"} 
        className="mt-2 p-2"
        onClick={()=> setUserVisible(true)}
      >
        Добавить Пользователя
      </Button>
      <Button 
        variant={"outline-dark"} 
        className="mt-2 p-2"
        onClick={()=> setEditUserVisible(true)}
      >
        Изменить Пользователя
      </Button>
      <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
      <CreateManufacturer show={manufacturerVisible} onHide={()=>setManufacturerVisible(false)}/>
      <CreateProduct show={productVisible} onHide={()=>setProductVisible(false)}/>
      <CreateUser show={userVisible} onHide={()=>setUserVisible(false)}/>
      <EditUsers show={editUserVisible} onHide={()=>setEditUserVisible(false)} />
    </Container>
  )
};

export default AdminPage;
