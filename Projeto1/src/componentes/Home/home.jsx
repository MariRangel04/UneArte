import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';
import Footer from './../Footer/footer';
import Header from './../Header/header';
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
        console.log('Pesquisando por:', searchTerm);
    };

    return (
        <div className="home-container">
            <Header />
            <div style={{ height: '20px' }}></div>

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

            <div>
                <h1>Sessões</h1>
            </div>

            {/* Seção com um quadro azul pastel ao redor das imagens */}
            <div className="image-links-section pastel-frame">
                <div className="image-item">
                    <div className="image-link-wrapper">
                        <Link to='/sessao'>
                            <img src={img1} alt="Imagem 1" className="image-link" />
                        </Link>
                        <p className="image-title">Inteligencia Artificial e Arte</p>
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
                        <p className="image-title">Cerrado Skate</p>
                    </div>
                </div>
            </div>

            {/* Sessões */}
            <div className="session-link">
                <Link to="/sessao">
                    <button className="btn-ver-sessao">Ver nossas Sessões</button>
                </Link>
            </div>

            <div className="separator-line"></div>
            
            {/* Sobre */}
            <h1>Bem-vindo à UneArte!</h1>
            <p>Aqui você encontrará conteúdos sobre arte nacional, que refletem a diversidade e a riqueza cultural do Brasil.</p>
            <p>Nossa ideia é promover a arte brasileira, oferecendo uma plataforma para artistas emergentes e para a valorização da cultura local.</p>

            
            <Footer style={{ marginTop: '50px' }} />

        </div>
    );
};

export default Home;
