import React, { useState } from "react";


const Cadastro = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({}); 

    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}; 
        //validações cadastro
        if (!name) {
            newErrors.name = "Nome é obrigatório";
        }

        if (!email) {
            newErrors.email = "E-mail é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "E-mail inválido";
        }

        if (!password) {
            newErrors.password = "Senha é obrigatória";
        } else if (password.length < 6) {
            newErrors.password = "A senha deve ter pelo menos 6 caracteres!";
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem!";
        }

        if (Object.keys(newErrors).length === 0) {
            console.log("Nome:", name, "E-mail:", email, "Senha:", password);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <span className="form-error">{errors.password}</span>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
                <div className="input-link">
                    <p>
                        Já possui uma conta? <a href="link">Faça login</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
