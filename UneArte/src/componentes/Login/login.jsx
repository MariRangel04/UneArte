import React, { useState } from "react";
import axios from "axios";  
import "./login.css"; 
import { Link, useNavigate } from "react-router-dom";
import logo2 from '../../assets/UneArte_logo2.png';
import { FaUserPlus, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); 
    const [message, setMessage] = useState(""); 
    const navigate = useNavigate(); // Hook para navegar entre páginas

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {}; 

        // Validação do formulário
        if (!username) {
            newErrors.username = "E-mail é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(username)) {
            newErrors.username = "E-mail inválido";
        }

        if (!password) {
            newErrors.password = "Senha é obrigatória";
        } else if (password.length < 6) {
            newErrors.password = "Senha incorreta!";
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                // Requisição de login
                const response = await axios.post('http://localhost:5000/api/auth/login', {
                    email: username, 
                    password: password
                });

                console.log('Login bem-sucedido:', response.data);
                setMessage("Login bem-sucedido!");

                // Armazenar o token no localStorage
                localStorage.setItem('authToken', response.data.token);

                // Redireciona para a página Home
                navigate("/"); 
            } catch (error) {
                console.error('Erro ao fazer login:', error.response?.data);
                setMessage(error.response?.data.message || "Erro ao fazer login"); 
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <div className="login-container">
                <Link to='/'>
                    <div className="logo">
                        <img src={logo2} alt="Logo UneArte"/>
                    </div>
                </Link>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            placeholder="E-mail"
                            onChange={(e) => setUsername(e.target.value)} />
                        {errors.username && <span className="form-error">{errors.username}</span>}
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <span className="form-error">{errors.password}</span>}
                    </div>
                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                    </div>
                    <div>
                        <button type="submit">Entrar</button>
                    </div>
                    {message && <span className="form-message">{message}</span>} 
                    <div className="input-link">
                        <p>
                            Não possui Cadastro? <Link to='/cadastro'>Clique aqui</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
