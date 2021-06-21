import React from 'react'
import { Input, Label } from 'semantic-ui-react'

const InputExampleRightLeftLabeled = () => (
  <Input labelPosition='right' type='text' placeholder='Valor Semestre'>
    <Label basic>R$</Label>
    <input />
    <Label>.00</Label>
  </Input>
)

export default InputExampleRightLeftLabeled