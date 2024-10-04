import React from "react";
import { useState } from "react";
import "./login.css";{/*estilos*/}


const Login = () => {
    {/*constantes para salvar os dados - vai ectrair do useState*/}
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = () =>{
            console.log("envio");
        }

    return(
        <div className="container">
            {/*formulario para pegar email e senha usuário*/}
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                <input type="email" placeholder="E-mail"/>
                </div>
                <div>
                <input type="password" placeholder="Senha"/>
                </div>
                {/*checkbox para sis lembrar do usuário*/}
                <div className="recall-forget">
                    <lable>
                        <input type="checkbox"/>
                        Lembre de mim
                    </lable>
                    {/*link redirecionando para recuperação de senha - routes */}
                </div>
                <div>
                    <button type="submit">Entrar</button>
                {/*link redirecionando para criação de uma conta - routes*/}
                </div>
                <div className="input-link">
                    <p>
                        Não possui Cadastro? <a href="link">Crie sua conta</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login