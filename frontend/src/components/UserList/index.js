import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns'

import api from '../../services/api';

import { Table, DivButton, Container } from './styles';

export default function UserList() {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function loadUsers() {
			try {
				const response = await api.get(`/users`);

				setUsers(response.data);

			} catch (err) {
				console.log(err);
			}
		}

		loadUsers();
	}, []);

	async function handleDeleteUser(userId) {
		try {
			await api.delete(`/users/${userId}`);

			setUsers(users.filter(user => user._id !== userId));

		} catch (err) {
			alert('Erro ao deletar');
		}
	}

	return (
		<>
			<DivButton>
				<Link to={'/users'}><button type="button">+ Criar novo usúario</button></Link>
			</DivButton>

			<Container>
				<Table>
					<thead>
						<tr>
							<th>&nbsp;</th>
							<th>&nbsp;</th>
							<th>Nome</th>
							<th>E-mail</th>
							<th>Data de Criação</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map(user => (
								<tr key={user._id}>
									<td>
										<Link className="link" to={`/user/${user._id}`}>Editar</Link>
									</td>
									<td>
										<span className="link" onClick={() => handleDeleteUser(user._id)}>Deletar</span>
									</td>
									<td>{user.fullName}</td>
									<td>{user.email}</td>
									<td>{format(parseISO(user.createdAt), "dd'/'MM'/'yyyy' - ' HH:mm'h'")}</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</Container>
		</>
	);
}
