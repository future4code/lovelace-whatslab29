import React from 'react';
import './App.css';
import styled from 'styled-components'
import { MessageForm } from './components/Mensagem';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      mensagem: [] 
    }
    
  }

  adicionarMensagem = (message) => {
    this.setState({ mensagem: [...this.state.mensagem, message] })
  }

  render() {
    return (
      <Centralizar>
      <AppContainer>
        <MessagesContainer>
          {
            this.state.mensagem.map((message, index) => <p key={index}><BoldText>{message.user}</BoldText>{': ' + message.text}</p>)
          }
        </MessagesContainer>
        <MessageForm adicionarMensagem={this.adicionarMensagem} />
      </AppContainer>
      </Centralizar>
      
      
    );
  }
}

export default App;

const Centralizar = styled.div`
display:flex;
justify-content: center;
margin-top:5px;


`

const AppContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 50px
`

const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  
  
  
`

const BoldText = styled.span`
  font-weight: bold;
  
`