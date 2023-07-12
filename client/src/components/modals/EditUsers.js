import React, {useContext, useEffect, useState} from "react"
import Modal from 'react-bootstrap/Modal';
import { Context } from "../..";
import { fetchUsers } from "../../http/userAPI";
import  User  from "./User";
import { observer } from "mobx-react-lite";
import { Button, Row, Col, Form } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { deleteUser } from "../../http/userAPI";

const EditUsers = observer(({show, onHide}) => {
  const {user} = useContext(Context)

  const del =  async (id) =>{
    const data = await deleteUser(id)
    console.log('delete compleat', data)
    user.setUsers(data.rows)
    //onHide()
  }
  useEffect(()=>{
  fetchUsers().then(data=>user.setUsers(data))
  },[])

  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Users
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-1">
          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Role</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
    
              {user.users.map(user =>
                <User key={user.id} user={user} del={del} />
              )}
            
          </tbody>
          </Table>
        </Modal.Body>
      </Modal>
  )
})

export default EditUsers;
