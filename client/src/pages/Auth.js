import React, { useContext, useState, useEffect } from "react"
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card"
import { Button, Form, } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { fetchUserInfo } from "../http/userAPI";
import { Context } from "..";




const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
   
 


const click = async ()=>{
  try {
    let data
    data = await login(userName, password);
    user.setUser(user)
    
    if(data.role === "ADMIN"){
      /*  alert("Вы вошли как Администратор") */
      user.setIsAdmin(true)
    }
    if(data.role === "USER"){
      user.setIsAuth(true)
    }
 
    navigate(ADMIN_ROUTE)
} catch (error) {
    alert(error.response.data.message)
}
}
  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
          <h2 >User Login</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите User Name"
            value={userName}
            onChange={e=> setUserName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль"
            value={password}
            onChange={e=> setPassword(e.target.value)}
            type="password"
          />
          <Button
            className="mt-3 align-self-end"
            variant={"outline-success"}
            onClick={click}
          >
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  )
}
)

export default Auth;
