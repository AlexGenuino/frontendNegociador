import React from 'react'
import { Table } from 'semantic-ui-react'


const TableExampleSelectableRow = props => {

  const renderRows = () => {
    const list = props.list || []
    
    return list.map(dados => (
      <Table.Row>
        <Table.Cell>{dados.name}</Table.Cell>
        <Table.Cell>{dados.time_course}</Table.Cell>
        <Table.Cell>{dados.semester}</Table.Cell>
        <Table.Cell>{2021}</Table.Cell>
        <Table.Cell>{dados.value_semester}</Table.Cell>
      </Table.Row>

    ))
  }
  
  return (
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Total de Semestre</Table.HeaderCell>
        <Table.HeaderCell>Semestre Atual</Table.HeaderCell>
        <Table.HeaderCell>Ano de Vigencia</Table.HeaderCell>
        <Table.HeaderCell>Valor Semestre</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderRows()}
    </Table.Body>
  </Table>
)
}

export default TableExampleSelectableRow