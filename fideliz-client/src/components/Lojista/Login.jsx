import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Lógica de autenticação
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>Login do Lojista</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
    </div>
  );
};

export default Login;
