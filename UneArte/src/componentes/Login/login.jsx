import React, { useState } from "react";
import "./login.css"; 

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); 

    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}; {/*mensagem de erro*/}

        if (!username) {
            newErrors.username = "E-mail é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(username)) {
            newErrors.username = "E-mail inválido";
        }

        if (!password) {
            newErrors.password = "Senha é obrigatória";
        } else if (password.length < 6) {
            newErrors.password = "A senha deve ter no mínimo 6 caracteres";
        }

        if (Object.keys(newErrors).length === 0) {
            {/*Se não houver erros, você pode prosseguir com o login*/}
            console.log("Usuário:", username, "Senha:", password);
        } else {
           {/*Atualiza o estado com os erros*/}
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setUsername(e.target.value)}/>
                    {errors.username && <span className="form-error">{errors.username}</span>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}/>
                    {errors.password && <span className="form-error">{errors.password}</span>}
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                </div>
                <div>
                    <button type="submit">Entrar</button>
                </div>
                <div className="input-link">
                    <p>
                        Não possui Cadastro? <a href="link">Crie sua conta</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
