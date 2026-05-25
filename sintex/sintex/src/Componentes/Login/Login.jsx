import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Componentes/Menu/imagens/logo.png";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Validação simples (depois você pode conectar com uma API)
    if (email === "admin@sintex.com" && senha === "123456") {
      
      // SALVA A SESSÃO DO ADMIN NO NAVEGADOR
      localStorage.setItem("userRole", "admin"); 
      
      navigate("/admin"); // Redireciona para a página do Admin
    } else if (email && senha) {
      alert("Login como cliente!");
      
      // Se quiser salvar o cliente também (opcional)
      localStorage.setItem("userRole", "client"); 
      
      navigate("/client"); // Redireciona para a página do Cliente
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="LoginContainer">
      <form className="LoginForm" onSubmit={handleLogin}>
        <div className="LoginLogoBox">
          <img src={logo} alt="Sintex Logo" className="LoginLogo" />
        </div>
        
        <h2>Entrar no Sintex</h2>

        <div className="InputGroup">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="seu-email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="InputGroup">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="LoginButton">Acessar</button>
        
        <div className="LoginFooter">
          <a href="#recuperar">Esqueceu a senha?</a>
          <span>Não tem conta? <a href="#cadastro" className="HighlightLink">Cadastre-se</a></span>
        </div>
      </form>
    </div>
  );
}