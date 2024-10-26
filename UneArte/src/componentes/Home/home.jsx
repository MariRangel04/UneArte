import React from 'react';
import { Link } from 'react-router-dom';
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
    return (
        <div className="home-container">
            <Link to="/">
            <div className='logo'>
                <img src={logo2} alt='Logo UneArte' />
            </div>
            </Link>
            <div className="header-buttons">
                <Link to="/login">
                    <RiLoginCircleLine size={24} style={{ marginRight: '8px', color: '#343575' }} /> 
                </Link>
                <Link to="/cadastro">
                    <FaUserPlus size={24} style={{ marginRight: '8px', color: '#343575' }} />
                </Link>
            </div>

            {/*Carrossel*/}
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <video controls autoPlay loop muted>
                    <source src={vid1} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
                <div>
                    <video  controls autoPlay loop muted>
                    <source src={vid2} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
                <div>
                    <video  controls autoPlay loop muted>
                    <source src={vid3} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </Carousel>

            {/*Sobre*/}
            <h1>Bem-vindo à UneArte!</h1>
            <p>Aqui você encontrará conteúdos sobre arte nacional, que refletem a diversidade e a riqueza cultural do Brasil. Nossa plataforma é um espaço dedicado à promoção da arte brasileira, onde buscamos não apenas exibir obras, mas também contar as histórias que as cercam. Acreditamos que cada artista tem uma voz única e importante, e nosso objetivo é proporcionar uma vitrine para esses talentos emergentes.</p>
            <p>Nossa ideia é promover a arte brasileira, oferecendo uma plataforma para artistas emergentes e para a valorização da cultura local. Queremos conectar artistas a um público mais amplo, permitindo que suas obras sejam vistas e apreciadas por todos. Além disso, também incentivamos a troca de experiências e a formação de uma comunidade que apoie e celebre a criatividade em todas as suas formas. A UneArte é mais do que uma revista; é um movimento que visa fortalecer a cultura e a arte no Brasil.</p>

            {/*Sessões*/}
            <div className="session-link">
                <Link to="/sessao">
                    <button className="btn-ver-sessao">Ver nossas Sessões</button>
                </Link>
            </div>

            <div className="image-links-section">
                <div className="image-item">
                    <img src={img1} alt="Imagem 1" className="image-link"/>
                    <p className="image-title">Semana no museu</p> 
                </div>
                <div className="image-item">
                    <img src={img2} alt="Imagem 2" className="image-link"/>
                    <p className="image-title">Semana Feshion week</p> 
                </div>
                <div className="image-item">
                    <img src={img3} alt="Imagem 3" className="image-link"/>
                    <p className="image-title">Skate</p> 
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

export default Home;
