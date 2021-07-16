import React from 'react';
import styled from 'styled-components'
import botaoEnviar from './img/send.png'


const MessageFormContainer = styled.div`
  display: flex;

 
`

const UserInput = styled.input`
  width: 100px;
  border-radius: 15px;
  background-color: LightGrey
`

const TextInput = styled.input`
  flex: 1;
  border-radius: 15px;
  background-color: LightGrey
`
const Botao = styled.button`
  border-radius: 50px;
  background-color: #a4c639
`;



export class MessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userValue: '',
      textValue: ''
    }
  }

  onChangeUsuario = (event) => {
    this.setState({userValue: event.target.value})
    
  }

  onChangeTexto = (event) => {
    this.setState({textValue: event.target.value})
  }

  onSendMenssagem = () => {
    const mensagens = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.adicionarMensagem(mensagens)

    this.setState({textValue: ''})
    this.setState({userValue: ''})
  }
  
  

  render() {
    return (
      <MessageFormContainer>
        <UserInput type="text" placeholder={'Usuário'} onChange={this.onChangeUsuario} value={this.state.userValue}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeTexto}  value={this.state.textValue}/>
        <Botao type="reset" onClick={this.onSendMenssagem}><img src={botaoEnviar}/></Botao>
      </MessageFormContainer>
    );
  }
}