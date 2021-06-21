import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastro from '../pages/Cadastro'
import CadastroCourse from '../pages/CadastroCourse'
import Login from '../pages/Login'
import Financeiro from '../pages/Financeiro'
import UserContext from '../context/userContext'
import axios from 'axios'

function Routes(){
    const [userData, setUserData] = useState();

    const handlerUserLogin = async (email, senha) => {

        let data;
        let error;

        await axios.post('http://127.0.0.1:8000/api/v1/login', {
            email:email,
            password:senha
        }).then(response => data = response.data)
        .catch(err => error = err);

        if(error) return;

        setUserData(data);
        GravarToken(data);
    }

    const GravarToken = (data) => {
        localStorage.setItem('token', data.token)
    }

    const LoadToken = () => {
        return localStorage.getItem('token')
    }
    
    const UserLogged = () => {
        if(userData) return <>                        
        <Route path ="/adm/cadastro" component={Cadastro} exact/>
        <Route path ="/adm/cadastrocourse" component={CadastroCourse} exact/>
        <Route path ="/adm/financeiro" component={Financeiro} exact/>
        <Route path ="/adm/login" component={Cadastro} />
        </>
        return <Route path = "/adm/login" component={Login} exact/>
    }
    return (
        <UserContext.Provider value={{userData, handlerUserLogin}}>
            <BrowserRouter>
                <Switch>
                    <UserLogged></UserLogged>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
        
    );
};

export default Routes;