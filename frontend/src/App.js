import React from 'react';

import Routes from './routes';

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
