import React, { useState } from 'react';

const Dashboard = () => {
  const [clientes, setClientes] = useState([]);
  const [nomeCliente, setNomeCliente] = useState('');
  const [contatoCliente, setContatoCliente] = useState('');
  const [enderecoCliente, setEnderecoCliente] = useState('');

  const handleAdicionarCliente = () => {
    // Lógica para adicionar cliente
    const novoCliente = { nome: nomeCliente, contato: contatoCliente, endereco: enderecoCliente };
    setClientes([...clientes, novoCliente]);
    setNomeCliente('');
    setContatoCliente('');
    setEnderecoCliente('');
  };

  return (
    <div>
      <h1>Dashboard do Lojista</h1>
      <div>
        <h2>Clientes Cadastrados</h2>
        <ul>
          {clientes.map((cliente, index) => (
            <li key={index}>{cliente.nome} - {cliente.contato}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cadastrar Novo Cliente</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contato"
          value={contatoCliente}
          onChange={(e) => setContatoCliente(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={enderecoCliente}
          onChange={(e) => setEnderecoCliente(e.target.value)}
        />
        <button onClick={handleAdicionarCliente}>Adicionar Cliente</button>
      </div>
    </div>
  );
};

export default Dashboard;
