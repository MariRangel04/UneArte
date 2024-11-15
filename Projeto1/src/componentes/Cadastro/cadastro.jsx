import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import './cadastro.css';
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import img1 from '../../assets/musseu_arte.jpg'; 
import logo2 from '../../assets/UneArte_logo2.png'; 

const Cadastro = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {};

        // Validações do formulário
        if (!name) {
            newErrors.name = "Nome é obrigatório";
        }

        if (!email) {
            newErrors.email = "E-mail é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "E-mail inválido";
        }

        if (!password) {
            newErrors.password = "Senha é obrigatória";
        } else if (password.length < 6) {
            newErrors.password = "A senha deve ter pelo menos 6 caracteres!";
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem!";
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:5000/api/auth/cadastro', {
                    name,
                    email,
                    password
                });
                console.log('Usuário registrado com sucesso:', response.data);

                navigate("/");
            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error.response.data);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <div className="cadastro-container">
                <div className="cadastro-circle">
                    <h1>Cadastro</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Nome"
                                onChange={(e) => setName(e.target.value)} />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="E-mail"
                                onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Senha"
                                onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && <span className="form-error">{errors.password}</span>}
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Confirmar Senha"
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
                        </div>
                        <div>
                            <button type="submit">Cadastrar</button>
                        </div>
                        <div className="input-link">
                            <p>
                                Já possui uma conta? <Link to='/login'>Faça Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <a href="https://www.instagram.com/idealunearte" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} style={{ margin: '0 8px', color: '#343575' }} />
                </a>
                <a href="https://www.tiktok.com/@idealunearte" target="_blank" rel="noopener noreferrer">
                    <FaTiktok size={24} style={{ margin: '0 8px', color: '#343575' }} />
                </a>
                <a href="mailto:uneartecontato@gmail.com">
                    <MdEmail size={24} style={{ margin: '0 8px', color: '#343575' }} />
                </a>
            </footer>
        </div>
    );
};

export default Cadastro;
