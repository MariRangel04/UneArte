import React from 'react';
import {Link} from 'react-router-dom';
import '../../componentes/Revista/sessão.css'; // Certifique-se de que o caminho do CSS está correto
import img1 from '../../assets/musseu_arte.jpg'; // Caminho da imagem do artigo
import logo2 from '../../assets/UneArte_logo2.png'; // Caminho da logo

const Sessão = () => {
    return (
        <div>
            {/* Logo da UneArte */}
            <Link to="/">
            <div className='logo'>
                <img src={logo2} alt='Logo UneArte' />
            </div>
            </Link>
            <h1>IA dentro da Arte</h1> 

            {/* artigo */}
            <div className="sessao-container">
                <div className="texto-artigo">
                    <p>
                        A Inteligência Artificial (IA) está transformando o mundo da arte de maneiras surpreendentes.
                        Desde a criação de obras de arte até a análise e interpretação de estilos, a IA está se tornando
                        uma ferramenta valiosa para artistas e críticos. Neste artigo, vamos explorar como a IA
                        está moldando a produção artística contemporânea e quais são suas implicações para o futuro
                        da criatividade.
                    </p>
                    {/* Adicione mais parágrafos ou seções conforme necessário */}
                </div>
                <div className="imagem-artigo">
                    <img src={img1} alt="Arte com IA" />
                </div>
            </div>
        </div>
    );
}

export default Sessão;
