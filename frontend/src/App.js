import React, { useEffect, useState } from 'react';

import Routes from './routes';
import api from './services/api';

import GlobalStyle from './styles/Global';
import { Container, Title } from './styles/App';


export default function App() {

  const [users, setUsers] = useState([]);

  async function handleAddUser(data) {
    const response = await api.post('/users', data);
    
    setUsers([...users, response.data]);
  }

  return (
    <>
    <GlobalStyle />
    <Container>
      <Title>Usuários</Title>

      <Routes />

    </Container>
    </>
  );
}
