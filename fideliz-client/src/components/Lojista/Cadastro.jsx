import React, { useState } from 'react';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [logo, setLogo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');

  const handleCadastro = () => {
    // Lógica para registrar novo restaurate
    alert('Restaurante cadastrado!');
  };

  return (
    <div>
      <h1>Cadastro do Lojista</h1>
      <input
        type="text"
        placeholder="Nome do Restaurante"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL da Logo"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contato"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;
