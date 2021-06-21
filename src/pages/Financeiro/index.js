import React, {useEffect, useState} from 'react'
import {Divider, Form, Label, Button, Input } from 'semantic-ui-react'
import { Container, CadastroName } from './styles';
import TableAlunos from '../../components/TableAlunos'
import TableFinanceiro from '../../components/TableFinanceiro'
import InputAmount from '../../components/InputAmount'
import Select from '../../components/Select';
import axios from 'axios'
import Menu from './../../components/Menu';

const Financeiro = () => {
    
    const URLgetstudent = 'http://127.0.0.1:8000/api/v1/student'


    const [listStudent, setlistStudent] = useState([])

    const [listdebt, setlistdebt] = useState([])

    const [selectedaluno, setselectedaluno] = useState()

    const LoadToken = () => {

        return localStorage.getItem('token')
      }

    const getStudent = () => {
        axios.get(`${URLgetstudent}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => setlistStudent(resp.data))
    }

    const getDebts = async (id) => {
        await axios.get(`http://127.0.0.1:8000/api/v1/student/${id}/debt`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => setlistdebt(resp.data.data))
    }

    useEffect(() => {
        getStudent()
    }, [])

    useEffect(() => {
        getDebts(selectedaluno)
        console.log(listdebt)
    }, [selectedaluno])

    
    return (
        <Container>
            <Menu></Menu>
    
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'20vh'}}>
            <CadastroName>Financeiro</CadastroName>
            </div>
            <div style={{padding:'1rem'}}>
            <Input label='R$' placeholder='Valor Parcela' />
            </div>
            <div style={{padding:'1rem'}}>
            <Input label='%' placeholder='Desconto' />
            </div>
            <div style={{padding:'1rem'}}>
            <Button content='Aplicar Desconto Sobre Parcela' />
            </div>
            <div>
            <Select list={listStudent} onSelected={setselectedaluno}/>
            </div>
            
                <TableFinanceiro list={listdebt}/>
    
        </Container>
    )
}

export default Financeiro