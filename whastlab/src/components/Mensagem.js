import React from 'react';
import styled from 'styled-components'
import botaoEnviar from './img/send.png'


const MensagemContainer = styled.div`
display: flex;
 
`

const UsuarioInput = styled.input`
  width: 100px;
  border-radius: 15px;
  background-color: LightGrey
`

const TextoInput = styled.input`
  flex: 1;
  border-radius: 15px;
  background-color: LightGrey
`
const Botao = styled.button`
  border-radius: 50px;
  background-color: #a4c639;
  display: flex;
  margin: px

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
    this.setState({usuarioValue: event.target.value})
    
  }

  onChangeTexto = (event) => {
    this.setState({textoValue: event.target.value})
  }

  onSendMenssagem = () => {
    const mensagens = {
      user: this.state.usuarioValue,
      text: this.state.textoValue
    }

    this.props.adicionarMensagem(mensagens)

    this.setState({textoValue: ''})
    this.setState({usuarioValue: ''})
  }
  
  

  render() {
    return (
      <MensagemContainer>
        <UsuarioInput type="text" placeholder={'Usuário'} onChange={this.onChangeUsuario} value={this.state.usuarioValue}/>
        <TextoInput type="text" placeholder={'Mensagem'} onChange={this.onChangeTexto}  value={this.state.textoValue} />
        <Botao type="reset" onClick={this.onSendMenssagem}><img src={botaoEnviar}/></Botao>
      </MensagemContainer>
    );
  }
}