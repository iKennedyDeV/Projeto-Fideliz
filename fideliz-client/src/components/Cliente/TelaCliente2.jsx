import React from 'react';

const TelaCliente2 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Logo do Restaurante</h1>
        <img src="link_para_logo" alt="Logo" />
        <h2>Cardápio</h2>
        <iframe src="link_para_pdf" width="100%" height="400px" />
        <h3>Contato</h3>
        <p>Telefone: (xx) xxxx-xxxx</p>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Pontos de Fidelidade</h2>
        <p>Pontos atuais: 5</p>
        <p>Próximo prêmio em: 5 pontos</p>
        <button onClick={() => alert('Escolha seu prêmio!')}>Escolher Prêmio</button>
      </div>
    </div>
  );
};

export default TelaCliente2;
