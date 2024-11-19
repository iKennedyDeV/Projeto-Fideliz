import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TelaCliente1 from './components/Cliente/TelaCliente1';
import TelaCliente2 from './components/Cliente/TelaCliente2';
import Login from './components/Lojista/Login';
import Cadastro from './components/Lojista/Cadastro';
import Dashboard from './components/Lojista/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cliente" component={TelaCliente1} />
        <Route path="/cliente/pontos" component={TelaCliente2} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;