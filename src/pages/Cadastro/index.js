import React, {useEffect, useState} from 'react'
import {Divider, Form, Label, Button } from 'semantic-ui-react'
import { Container, CadastroName } from './styles';
import Select from '../../components/Select';
import TableAlunos from '../../components/TableAlunos'
import Menu from './../../components/Menu';
import axios from 'axios'

const Cadastro = () => {
    
    const [Name, setName] = useState()
    const [lastName, setlastName] = useState()
    const [birthdate, setbirthdate] = useState()
    const [cpf, setcpf] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()


const handleSubmit = async(event, values) => {
    event.preventDefault()
    CreateStudent()
}

const LoadToken = () => {

  return localStorage.getItem('token')
}

const URLgetstudent = 'http://127.0.0.1:8000/api/v1/student'
    
    const [listUsers, setlistUsers] = useState([])

    const [selectedcourse, setselectedcourse] = useState()

    const getUsers = () => {
        axios.get(`${URLgetstudent}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => setlistUsers(resp.data))
    }
    
    const URLgetcourse = 'http://127.0.0.1:8000/api/v1/course'
    
    const [listCourse, setlistCorse] = useState([])

    const getCorse = () => {
        axios.get(`${URLgetcourse}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => {
                    setlistCorse(resp.data)})
    }

    const CreateStudent = async () => {
        try {const {data} = await axios.post('http://127.0.0.1:8000/api/v1/student', { 
            CPF: cpf,
            name: Name +" "+lastName,
            email: email,
            password: password,
            birth_date: birthdate,
            course: selectedcourse,
         }, {headers:{Authorization:`Bearer ${LoadToken()}`}})
            console.log(data)
        } catch (error) {
            console.log(error.response)
        }
    }
    
    useEffect(() => {
        getUsers()
        getCorse()
    }, [])

    useEffect(() => {
        console.log(selectedcourse)
    }, [selectedcourse])

  return (<Container>
    <Menu></Menu>
  <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'20vh'}}>
  <CadastroName>Cadastro de Alunos</CadastroName>
  </div>
  <Form onSubmit = {handleSubmit}>
      <Form.Field>
        <input onChange={e => setName(e.target.value)} type='text' placeholder='Primeiro Nome' />
      </Form.Field>
      <Form.Field>
        <input onChange={e => setlastName(e.target.value)} type='text' placeholder='Ultimo nome' />
      </Form.Field>
      <Form.Field>
      <Label basic color='green' pointing='below'>
          Data de Nascimento
      </Label>
        <input onChange={e => setbirthdate(e.target.value)} type='date' placeholder='Data de Nascimento' />
      </Form.Field>
      <Form.Field>
        <input onChange={e => setcpf(e.target.value)} type='number' placeholder='CPF' />
      </Form.Field>
      <Divider />
      <Form.Field>
      <Label basic color='red' pointing='below'>
          Preencher Apenas se o aluno tiver Responsavel
      </Label>
        <input type='text' placeholder='Nome Responsavel' />
      </Form.Field>
      <Form.Field>
      <Label basic color='red' pointing='below'>
          Preencher Apenas se o aluno tiver Responsavel
      </Label>
        <input type='number' placeholder='CPF' />
      </Form.Field>
      <Form.Field>
      <Label basic color='green' pointing='below'>
          Data de Nascimento
      </Label>
      <Label basic color='red' pointing='below'>
          Preencher Apenas se o aluno tiver Responsavel
      </Label>
        <input type='date' placeholder='Data de Nascimento' />
      </Form.Field>
      <Divider />
      <Form.Field inline>
        <input onChange={e => setemail(e.target.value)} type='text' placeholder='Username' />
      <Label pointing='left'>Escolha um nome de usuario para o aluno</Label>
      </Form.Field>
      <Form.Field inline>
        <input onChange={e => setpassword(e.target.value)} type='password' placeholder='Password' />
      <Label pointing='left'>A senha do aluno deve conter 6 caracters</Label>
      </Form.Field>
      <Divider />
      <Form.Field>
      <Label basic color='blue' pointing='below'>
          Selecione o Curso
      </Label>
      <Select list={listCourse} onSelected={setselectedcourse}/>
      </Form.Field>
      <div style={{marginTop:'2rem', display:'flex', alignItems:'center', justifyContent:'center', height:'15vh'}}>
      <Button type="submit" content='Cadastrar' />
      <Button content='Alterar' />
      <Button content='Excluir' />
    </div>
  </Form>
  <div style={{padding:'2rem'}}>
      <TableAlunos list={listUsers}/>
  </div>
</Container>)
}

export default Cadastro;
