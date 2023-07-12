import React, {useState, useEffect, useContext} from "react"
import { Row, Col, Form, Button } from "react-bootstrap";
import { fetchUserInfo } from "../../http/userAPI";
import { Context } from "../..";
import { deleteUser } from "../../http/userAPI";

const User = ({user, del}) => {
  const [info, setInfo] = useState({})

  useEffect(()=>{
    fetchUserInfo (user.id).then(data => setInfo(data))
  },[]) 

  
    
  return (
    <tr> 
      <td>{user.id}</td>
      <td>{user.userName}</td>
      <td>{user.role}</td>
      <td>{info.name}</td>
      <td>
        <Button variant="link" size="sm">
          Edit
        </Button>
      </td>
      <td>
        <Button variant="outline-danger" size="sm" onClick = {()=>del(user.id)}>
        Delete
        </Button>
      </td>
    </tr>
  )
};

export default User;
