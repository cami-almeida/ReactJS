import React, {Component} from 'react';
import api from "../../services/api";
import "./styles.js";
import { Link } from 'react-router-dom';
import { Form, Container} from './styles.js'
import Logo from "../../assets/listar.png";

export default class Main extends Component{
    state = {
        users: [],
    }

    //Método chamando a arrow function criada abaixo
    componentDidMount(){
        this.loadUsers();
    }

    //Arrow Function para resgatar todos os usuários da API REST
    loadUsers = async () => {
        const response = await api.get('/listar');
        this.setState({users: response.data});
    };

   
    //Método Render para exibir atributos específicos do usuário na página, com um link para a página info/index
    render(){
        const {users} = this.state;
        return(
            <Container>
                <Form>
                <img src={Logo} alt="Logo" />
                
            {users.map(user =>(
                <article key={user.id}>
                <strong>{user.username}</strong>
                <p>{user.email}</p>
               
                <Link to={`/user/${user.id}`}>Acessar</Link>
               <hr/>
                </article>
            ))}
            <Link to="/">Sair</Link>
            </Form>
            </Container>
            
        )
    }
}
