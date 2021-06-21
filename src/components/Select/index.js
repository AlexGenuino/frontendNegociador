import { Select } from 'semantic-ui-react'
import React from 'react'

const SelectExample = ({list, onSelected}) => {

  
  const renderRows = () => {
    const listcourse = list || []
    
    return listcourse.map(dados => (
      
      {key: dados.id, value: dados.id, text: dados.name}
      
    ))
  }

  
  return (
    
    <Select onChange={(e, value) => {onSelected(value.value)}} placeholder='Selecione o curso' options={renderRows()} />
    
  )
}
  


export default SelectExample