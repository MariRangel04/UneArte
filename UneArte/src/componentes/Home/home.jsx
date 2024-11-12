import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';
import logo from '../../assets/UneArte_logo.jpg';
import logo2 from '../../assets/UneArte_logo2.png';
import img1 from '../../assets/musseu_arte.jpg';
import img2 from '../../assets/musseu_arte2.jpg';
import img3 from '../../assets/musseu_arte3.jpg';
import vid1 from '../../assets/museu_vid1.mp4';
import vid2 from '../../assets/museu_vid2.mp4';
import vid3 from '../../assets/museu_vid3.mp4';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true); 
        } else {
            setIsLoggedIn(false); 
        }
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
        // Lógica para lidar com a pesquisa
        console.log('Pesquisando por:', searchTerm);
    };

    return (
        <div className="home-container">
            <div className="header">
                <Link to="/">
                    <div className="logo">
                        <img src={logo2} alt="Logo UneArte" />
                    </div>
                </Link>
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                        className="search-input"
                    />
                </form>
                <div className="header-buttons">
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
            </div>

            {/* Carrossel */}
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <video controls autoPlay loop muted>
                        <source src={vid1} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
                <div>
                    <video controls autoPlay loop muted>
                        <source src={vid2} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
                <div>
                    <video controls autoPlay loop muted>
                        <source src={vid3} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </Carousel>

            <div className="separator-line"></div>

            {/* Sobre */}
            <h1>Bem-vindo à UneArte!</h1>
            <p>Aqui você encontrará conteúdos sobre arte nacional, que refletem a diversidade e a riqueza cultural do Brasil.</p>
            <p>Nossa ideia é promover a arte brasileira, oferecendo uma plataforma para artistas emergentes e para a valorização da cultura local.</p>

            {/* Sessões */}
            <div className="session-link">
                <Link to="/sessao">
                    <button className="btn-ver-sessao">Ver nossas Sessões</button>
                </Link>
            </div>

            <div className="image-links-section">
                <div className="image-item">
                    <div className="image-link-wrapper">
                        <img src={img1} alt="Imagem 1" className="image-link" />
                        <p className="image-title">Museu</p>
                    </div>
                </div>
                <div className="image-item">
                    <div className="image-link-wrapper">
                        <img src={img2} alt="Imagem 2" className="image-link" />
                        <p className="image-title">Fashion Week</p>
                    </div>
                </div>
                <div className="image-item">
                    <div className="image-link-wrapper">
                        <img src={img3} alt="Imagem 3" className="image-link" />
                        <p className="image-title">Skate</p>
                    </div>
                </div>
            </div>

            <div className="separator-line"></div>

            <footer className="footer">
                <div className="footer-logo">
                    <img src={logo2} alt="Logo UneArte" />
                </div>

                <div className="footer-socials">
                    <a href="https://www.instagram.com/idealunearte" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} style={{ margin: '0 8px', color: '#343575' }} />
                    </a>
                    <a href="https://www.tiktok.com/@idealunearte" target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={24} style={{ margin: '0 8px', color: '#343575' }} />
                    </a>
                    <a href="mailto:uneartecontato@gmail.com">
                        <MdEmail size={24} style={{ margin: '0 8px', color: '#343575' }} />
                    </a>
                </div>

                <div className="footer-links">
                    <Link to="/sessao1">Sessão 1</Link>
                    <Link to="/sessao2">Sessão 2</Link>
                    <Link to="/sessao3">Sessão 3</Link>
                </div>
            </footer>
        </div>
    );
};

export default Home;
