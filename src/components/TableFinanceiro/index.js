import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleSelectableRow = props => {

  const renderRows = () => {
    const list = props.list || []
    
    return list.map(dados => (
      <Table.Row>
        <Table.Cell>{dados.parcel}</Table.Cell>
        <Table.Cell>{dados.form_payment}</Table.Cell>
        <Table.Cell>{dados.value}</Table.Cell>
        <Table.Cell>{dados.payment}</Table.Cell>
        <Table.Cell>{dados.expiration_date}</Table.Cell>
      </Table.Row>

    ))
  }
  
  return (
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Parcela</Table.HeaderCell>
        <Table.HeaderCell>Forma de Pagamento</Table.HeaderCell>
        <Table.HeaderCell>Valor</Table.HeaderCell>
        <Table.HeaderCell>Status Pag</Table.HeaderCell>
        <Table.HeaderCell>Data de Vencimento</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderRows()}
    </Table.Body>
  </Table>
)
}

export default TableExampleSelectableRow