import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import { FaUserPlus, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './../Footer/footer';
import Header from './../Header/header';
import { logo, logo2, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, vid1, vid2, vid3, julia, nathalia, mari } from './../../assets/media';


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

            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div id="home">
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

            <div>
                <h1>Sessões</h1>
            </div>

            <div className="session-container">
                <div className="image-links-section pastel-frame">
                    <div className="image-item">
                        <div className="image-link-wrapper">
                            <Link to='/sessao'>
                                <img src={img12} alt="Imagem 1" className="image-link" />
                            </Link>
                            <p className="image-title">Inteligência Artificial e Arte</p>
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
            </div>

            <h1 style={{ textAlign: "center" }} id="galeria">Galeria de Eventos</h1>

            <div className="event-gallery">
                <img src={img1} alt="Evento 1" className="event-photo" />
                <img src={img2} alt="Evento 2" className="event-photo" />
                <img src={img3} alt="Evento 3" className="event-photo" />
                <img src={img11} alt="Evento 3" className="event-photo" />
            </div>
            <div className="event-gallery">
                <img src={img5} alt="Evento 3" className="event-photo" />
                <img src={img8} alt="Evento 3" className="event-photo" />
                <img src={img7} alt="Evento 3" className="event-photo" />
                <img src={img4} alt="Evento 3" className="event-photo" />
            </div>


            <div className='sobre-content' id='sobre-nos'>
                <div className="about-section">
                    <img src={logo} alt='Logo' className="about-logo" />
                    <div className="about-text">
                        <h1 id="sobre-nos">Sobre a UneArte!</h1>
                        <p>A UneArte é uma plataforma digital dedicada à promoção e valorização da arte brasileira, com um foco especial na produção de artistas emergentes e universitários. Funcionamos como uma revista online, explorando a rica diversidade artística do Brasil através de conteúdos que abrangem artes plásticas, literatura, música, teatro, fotografia e design.</p>
                        <p>Nossa missão é oferecer um espaço acessível e inclusivo para que novos talentos possam se expressar e alcançar um público mais amplo. Acreditamos no poder transformador da arte e buscamos conectar criadores e admiradores de todas as partes do país. Com a UneArte, celebramos a criatividade e a inovação, destacando a riqueza cultural que define nosso Brasil.</p>
                    </div>
                </div>
            </div>

            <h1 id="nosso-time">Nosso Time</h1>
            <div className="team-section">
                <div className="team-member">
                    <img src={julia} alt="Julia" className="team-photo" />
                    <p className="profile-title">Julia Meireles</p>
                    <p className="profile-description">Estudante de Ciência da Computação, Desenvolvedora Backend, Especialista em Frontend</p>
                </div>
                <div className="team-member">
                    <img src={nathalia} alt="Nathalia" className="team-photo" />
                    <p className="profile-title">Nathalia Gonçalves</p>
                    <p className="profile-description">Estudante de Ciência da Computação, Desenvolvedora Backend, Especialista em Frontend</p>
                </div>
                <div className="team-member">
                    <img src={mari} alt="Maria" className="team-photo" />
                    <p className="profile-title">Maria Clara</p>
                    <p className="profile-description">Estudante de Ciência da Computação, Desenvolvedora Backend, Especialista em Frontend</p>
                </div>
            </div>
            <Footer style={{ marginTop: '50px' }} />

        </div>
    );
};

export default Home;
