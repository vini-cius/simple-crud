import React, { useEffect, useState } from 'react';

import Routes from './routes';
import api from './services/api';

import GlobalStyle from './styles/Global';
import { Container, Title } from './styles/App';


export default function App() {

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
