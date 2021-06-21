import React from 'react'
import { Table } from 'semantic-ui-react'

const UsersList = props => {
  
  const renderRows = () => {
    const list = props.list || []
    
    return list.map(dados => (
      <Table.Row>
        <Table.Cell>{dados.CPF}</Table.Cell>
        <Table.Cell>{dados.name}</Table.Cell>
        <Table.Cell>{dados.birth_date}</Table.Cell>
      </Table.Row>

    ))
  }
  
  return (
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>CPF</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Aniversario</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      
      {renderRows()}
      
    </Table.Body>
  </Table>
)
  }

  export default UsersList

