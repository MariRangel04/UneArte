import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import logo2 from '../../assets/UneArte_logo2.png';

const Sessao = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se há um token no localStorage
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true); // Usuário está logado
        } else {
            setIsLoggedIn(false); // Usuário não está logado
        }
    }, []);

    const handleLogout = () => {
        // Remove o token do localStorage
        localStorage.removeItem('authToken');
        setIsLoggedIn(false); // Atualiza o estado local
        // Redireciona para a página de login
        navigate('/login');
    };

    return (
        <div className="sessao-container">
            <Link to="/">
                <div className='logo'>
                    <img src={logo2} alt='Logo UneArte' />
                </div>
            </Link>

            <div className="header-buttons">
                {/* Exibe os ícones de login/cadastro ou logout dependendo do estado */}
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">
                            <RiLoginCircleLine size={24} style={{ marginRight: '8px', color: '#343575' }} />
                        </Link>
                        <Link to="/cadastro">
                            <FaUserPlus size={24} style={{ marginRight: '8px', color: '#343575' }} />
                        </Link>
                    </>
                ) : (
                    <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <RiLoginCircleLine size={24} style={{ marginRight: '8px', color: '#343575' }} />
                        Sair
                    </button>
                )}
            </div>

            {/* Conteúdo da Sessão (Blog) */}
            <h1>Bem-vindo à nossa sessão de arte!</h1>
            <p>Esta é uma sessão especial onde você pode ler conteúdos sobre arte brasileira. Explore os artigos, entrevistas e mais sobre os artistas nacionais!</p>

            {/* Exemplo de Postagem do Blog */}
            <div className="post">
                <h2>Título do Post 1</h2>
                <p>Este é o conteúdo do primeiro artigo sobre arte brasileira. A história e a reflexão sobre nossas raízes culturais.</p>
                <Link to="/post-1" className="read-more">Leia mais...</Link>
            </div>

            <div className="post">
                <h2>Título do Post 2</h2>
                <p>Este artigo fala sobre a arte contemporânea no Brasil e as influências internacionais.</p>
                <Link to="/post-2" className="read-more">Leia mais...</Link>
            </div>

            {/* Rodapé com Links de Redes Sociais */}
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

export default Sessao;
