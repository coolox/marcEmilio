import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
          if (data){
            if (data.role === "USER"){
              user.setUser(true)
              user.setIsAuth(true)
            console.log('v tokene user')
            }else if (data.role === "ADMIN") {
              user.setUser(true)
              user.setIsAdmin(true)
              console.log('v tokene admin')
            }
          }
        }).finally(() => setLoading(false))

    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;