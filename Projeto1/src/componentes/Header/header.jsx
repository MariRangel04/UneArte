import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import logo2 from '../../assets/UneArte_logo2.png';
import './header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header-container">
            <Link to="/" className="logo-link">
                <img src={logo2} alt="Logo UneArte" className="header-logo" />
            </Link>

            <div className="header-right">
                <div className="header-links">
                    <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                    <a href="#sobre-nos" onClick={() => scrollToSection('sobre-nos')}>Sobre Nós</a>
                    <a href="#galeria" onClick={() => scrollToSection('galeria')}>Galeria</a>
                    <a href="#nosso-time" onClick={() => scrollToSection('nosso-time')}>Nosso Time</a>
                </div>

                <div className="header-buttons">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login">
                                <RiLoginCircleLine size={24} style={{ color: '#ffffff' }} />
                            </Link>
                            <Link to="/cadastro">
                                <FaUserPlus size={24} style={{ color: '#ffffff' }} />
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
            </div>
        </header>
    );
};

export default Header;
