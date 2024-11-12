import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import logo2 from '../../assets/UneArte_logo2.png';
import './header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        navigate('/login');
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Pesquisando por:', searchTerm);
        // Adicione a lógica de pesquisa aqui, se necessário.
    };

    return (
        <header className="header-container">
            {/* Logo à esquerda */}
            <Link to="/" className="logo-link">
                <img src={logo2} alt="Logo UneArte" className="header-logo" />
            </Link>

            {/* Barra de pesquisa no centro */}
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className="search-input"
                />
            </form>

            {/* Ícones de login/cadastro ou logout à direita */}
            <div className="header-buttons">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">
                            <RiLoginCircleLine size={24} style={{ color: '#343575' }} />
                        </Link>
                        <Link to="/cadastro">
                            <FaUserPlus size={24} style={{ color: '#343575' }} />
                        </Link>
                    </>
                ) : (
                    <button 
                        className="logout-button" 
                        onClick={handleLogout}
                    >
                        <RiLoginCircleLine size={24} style={{ color: '#343575' }} />
                        Sair
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
