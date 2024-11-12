import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RiLoginCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import img1 from '../../assets/musseu_arte.jpg'; // Caminho da imagem
import logo2 from '../../assets/UneArte_logo2.png'; // Caminho da logo
import Footer from './../Footer/footer';
import Header from '../Header/header';

const Sessao = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
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
            <Header />
            <div style={{ height: '20px' }}></div>

            {/* Exemplo de Postagem do Blog */}
            <div className="post" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '30px' }}>
                <img src={img1} alt="Museu de Arte" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
                <div style={{ maxWidth: '700px', paddingRight: '20px' }}>
                    <h2 style={{ textAlign: 'center' }}>Inteligência Artificial e Arte: A Revolução Criativa</h2>
                    <p>A arte sempre foi uma manifestação profundamente humana, um reflexo da sociedade, da cultura e das emoções. No entanto, com o advento da inteligência artificial (IA), o conceito de criatividade está sendo redefinido. Artistas estão usando algoritmos, redes neurais e aprendizado de máquina para criar obras de arte que desafiam as fronteiras do que é considerado "feito à mão" e, mais importante, o que significa ser um artista.</p>
                    <p>A inteligência artificial pode ser vista como uma ferramenta poderosa para os artistas, permitindo que eles explorem novas formas de expressão e criem trabalhos que seriam impensáveis sem o uso de tecnologia. Ferramentas como o DeepArt, que usa redes neurais para transformar fotos em pinturas no estilo de artistas famosos, e o DALL-E, que gera imagens a partir de descrições textuais, são exemplos de como a IA pode ampliar a criatividade humana.</p>
                    <p>Embora alguns críticos aleguem que a arte criada por IA perde a essência humana, muitos argumentam que a colaboração entre o homem e a máquina pode gerar resultados impressionantes. A IA não substitui o artista; ela se torna uma extensão das suas ideias, um novo meio para explorar possibilidades infinitas.</p>
                    <p>Este é apenas o começo de uma nova era na arte, onde as máquinas não são vistas apenas como ferramentas, mas como parceiras criativas. E, no Brasil, artistas já estão explorando essas possibilidades para criar novas formas de arte, desafiando a tradição e abraçando a inovação digital.</p>
                </div>
            </div>
            <Footer style={{ marginTop: '50px' }} />
        </div>
    );
};

export default Sessao;
