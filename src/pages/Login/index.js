import React, {useContext, useState} from 'react';
import { Container } from './styles';
import { Button, Form, Segment } from 'semantic-ui-react'
import userContext from '../../context/userContext'

const Login = () => {

    let {userData, handlerUserLogin} = useContext(userContext)

    const [userEmail, setuserEmail] = useState()
    const [userSenha, setuserSenha] = useState()

    const handlerUser = () => {
        handlerUserLogin(userEmail, userSenha)
    }

  return (

    <Container>
        
           <Segment>
                <Form>
                <Form.Input
                    onChange={(e) => setuserEmail(e.target.value)}
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                />
                <Form.Input
                    onChange={(e) => setuserSenha(e.target.value)}
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                />
                <Button content='Login' primary onClick={handlerUser}/>
                </Form>
        </Segment>
    </Container>
  )
}

export default Login