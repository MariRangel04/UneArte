import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './../Footer/footer';
import Header from '../Header/header';
import { img12 } from './../../assets/media'; 

const Sessao = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    return (
        <div className="sessao-container">
            <Header />
            <div style={{ height: '40px' }}></div>

            <div style={{ marginBottom: '30px' }}>
                <img
                    src={img12}
                    alt="Imagem de Arte"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }}
                />
            </div>

            <div className="post" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', marginBottom: '30px', maxWidth: '1100px', margin: '0 auto' }}>

                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        fontFamily: '"Arial Black", sans-serif',
                        lineHeight: '1.2',
                        marginBottom: '20px'
                    }}>
                        Inteligência Artificial e Arte: A Revolução Criativa
                    </h2>
                </div>

                <div style={{
                    flex: 2,
                    padding: '20px',
                    textAlign: 'justify',
                    marginLeft: '20px',
                    maxWidth: '50%'
                }}>
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
