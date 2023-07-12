import React, {useContext, useEffect, useState} from "react"
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, USER_INFO_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite"
import Stack from 'react-bootstrap/Stack';
import jwt_decode from "jwt-decode"
import { fetchUserInfo } from "../http/userAPI";



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const [name, setName] = useState('name')
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    
   
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.removeItem('token')
        navigate(HOME_ROUTE)
    }

    const getName = async()=> {
        const data = await jwt_decode(token)
        const info = await fetchUserInfo(data.id)
        setName(info.name)
    }
   if(token){
    getName()
   }else(console.log('no token'))
  
    /* if(token){
        try {
            const data =async()=> await jwt_decode(token)
            console.log('decoded data:', data)
            useEffect(()=>{
                fetchUserInfo(data.id).then(data => setName(data.name))
              },[]) 
            
          } catch (error) {
            alert(error.response.data.message)
          }
        }else{console.log('no token')} */
    
    

    
 
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        {user.isAdmin ?
            <Container>
                <NavLink style={{color: "white"}} to={HOME_ROUTE}>Marc Emilio</NavLink>
                <Stack className="ml-auto" style={{color: "white"}} direction="horizontal" gap ={3}>
                    <Button variant="outline-warning"onClick={()=> navigate(ADMIN_ROUTE)}>{name}</Button>
                    <Button variant="outline-warning"onClick={()=> {
                        logOut()}}
                    >
                        Выход
                    </Button>
            </Stack>
            </Container>

            
        : 
            user.isAuth ? 
            <Container>
            <NavLink style={{color: "white"}} to={HOME_ROUTE}>Marc Emilio</NavLink>
                <Stack className="ml-auto" style={{color: "white"}} direction="horizontal" gap ={3}>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#home">{name}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            menuVariant="dark"
                            >
                                <NavDropdown.Item href={HOME_ROUTE}>Shop</NavDropdown.Item>
                                <NavDropdown.Item href={USER_INFO_ROUTE}>Статистика пользователя</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    <Button variant="outline-light" onClick={()=> {
                        logOut()}}
                    >
                        Logout
                    </Button>
                </Stack>
              </Container>
        :
            <Container>
                <NavLink style={{color: "white"}} to={HOME_ROUTE}>Marc Emilio</NavLink>
                <Nav className="ml-auto" style={{color: "white"}}>
                    <Button variant="outline-light" onClick={()=> navigate(LOGIN_ROUTE)}>Login</Button>
                </Nav>
            </Container>
        }
        
      </Navbar>
  )
}
)

export default NavBar;
