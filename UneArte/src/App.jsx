import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/home';
import Login from './componentes/Login/login';
import Cadastro from './componentes/Cadastro/cadastro';
import Revista from '../src/componentes/Revista/sessão';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path ="/sessao" element={<Revista/>} />
      </Routes>
    </Router>
  );
}

export default App;
