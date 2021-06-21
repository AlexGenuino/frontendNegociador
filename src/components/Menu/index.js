import React, { Children, Component } from 'react'
import { Container, Input, Menu, Segment } from 'semantic-ui-react'
import {NameH1} from './styles'
import { useHistory  } from "react-router-dom";
  
  const MenuPage = ({children}) => {

    const history = useHistory()
    return ( <>
    <Container>
        <div>
        <Menu pointing>
          <Menu.Item
            name='Alunos'
            onClick={() => history.push('/adm/cadastro')}
            
          />
          <Menu.Item
            name='Cursos'
            onClick={() => history.push('/adm/cadastrocourse')}
          />
          <Menu.Item
            name='Financeiro'
            onClick={() => history.push('/adm/financeiro')}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
                <NameH1>Painel Adm</NameH1>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </Container>
    {children}
    </>
    )
  }
  
  export default MenuPage;
    
  
