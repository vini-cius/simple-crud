import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns'

import api from '../../services/api';

import { Table, DivButton } from './styles';

export default function UserList() {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function loadUsers() {
			try {
				const response = await api.get('/users');

				setUsers(response.data);
			} catch (err) {
				console.log(err);
			}
		}

		loadUsers();
	}, []);

	return (
		<>
			<DivButton>
				<Link to={'/users'}><button type="button">+ Criar novo usúario</button></Link>
			</DivButton>

			<Table>
				<thead>
					<tr>
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
								<td><Link to={`/users/${user._id}`}>Editar</Link></td>
								<td>{user.firstName} {user.lastName}</td>
								<td>{user.email}</td>
								<td>{format(parseISO(user.createdAt), "dd'/'MM'/'yyyy' - ' HH:mm'h'")}</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</>
	);
}
