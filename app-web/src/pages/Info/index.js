//Página das informações de cada usuário por ID
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import api from "../../services/api";
import "./styles.js"
import { Form, Container} from './styles.js'
import Logo from "../../assets/alterar.png";

class Info extends Component{
    state = {
        users: []
    }

    //Componente para resgatar cada usuário cadastrado na API REST e alimentar o state criado acima
    async componentDidMount(){
        const {id} = this.props.match.params
        const response = await api.get(`/pesquisar/${id}`);
        this.setState({users: response.data});
    };  
   UpdateUser = async () => {
        const {id} = this.props.match.params
        const {username, email, password} = this.state
        await api.post(`/alterar/${id}`, {username, email, password});
        //this.props.history.push("/");        
      };

    OnDeleteUser = async () => {
        const {id} = this.props.match.params
        if(!window.confirm("Deseja encerrar sua conta?"))
        return
   
        await api.delete(`/deletar/${id}`)        
        this.props.history.push("/");
        //this.setState({users: this.state.users.data}) 
        }
     //Render para exibir os atributos do usuário na página
    render(){
        const {users} = this.state;
        return (
            <Container>
                <Form>
                <img src={Logo} alt="Logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder={users.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder={users.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="*****"
            onChange={e => this.setState({ password: e.target.value })}
          />
                    <button onClick={()=>this.UpdateUser()}>Alterar</button>
                    <Link to="/app">Voltar</Link>    
                   </Form>                 
                    <button onClick={()=>this.OnDeleteUser()}>Deletar Conta</button>                      
            </Container>


        );
    }
}

export default withRouter(Info);


