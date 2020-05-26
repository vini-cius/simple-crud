import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { parseISO, formatISO, format } from 'date-fns'

import { InputBlock, InputGroup, Input, Legend, Button, Select, DivButton } from './styles';

import api from '../../services/api';

export default function UserForm() {

	const [users, setUsers] = useState({});
	const history = useHistory();
	let { id } = useParams();

	useEffect(() => {

		async function loadUserById() {

			const response = await api.get(`/users/${id}`);

			setUsers(response.data);
		}

		loadUserById();
	}, [id]);

	async function handleSaveNewUser(e) {
		e.preventDefault();

		const data = {
			fullName: users.fullName,
			email: users.email,
			dateOfBirth: users.dateOfBirth,
			gender: users.gender,
			phone: users.phone,
			zipCode: users.zipCode,
			address: users.address,
			addressNumber: users.addressNumber,
			address2: users.address2,
			city: users.city,
			state: users.state,
		};

		try {
			await api.post('/users', data);

			alert('Usuário salvo com sucesso');
			history.push('/');

		} catch (error) {
			console.log(error)
		}
	}

	function handleInputChange(e) {
		e.persist();
		setUsers(users => ({ ...users, [e.target.name]: e.target.value }));
	}

	return (
		<>
			<DivButton>
				<Link to={'/'}>
					<button type="button">Lista de Usuários</button>
				</Link>
			</DivButton>

			<form onSubmit={handleSaveNewUser}>
				<Legend>
					<h4>Dados Pessoais</h4>
					<hr />
				</Legend>

				<InputGroup>
					<InputBlock>
						<label htmlFor="fullName">Nome Completo <span>*</span></label>
						<Input
							id="fullName"
							name="fullName"
							value={users.fullName || ''}
							onChange={handleInputChange}
							required
						/>
					</InputBlock>
				</InputGroup>

				<InputBlock>
					<label htmlFor="email">E-mail <span>*</span></label>
					<Input
						type="email"
						id="email"
						name="email"
						value={users.email || ''}
						onChange={handleInputChange}
						required
					/>
				</InputBlock>

				<InputGroup>
					<InputBlock>
						<label htmlFor="dateOfBirth">Data de Nascimento <span>*</span></label>
						<Input
							type="text"
							id="dateOfBirth"
							name="dateOfBirth"
							value={parseISO(users.dateOfBirth) || ''}
							onChange={handleInputChange}
							required
						/>
					</InputBlock>

					<InputBlock>
						<label htmlFor="gender">Gênero</label>
						<Select name="gender" id="gender" onChange={handleInputChange}>
							<option value="">Selecione...</option>
							<option value="Masculino">Masculino</option>
							<option value="Feminino">Feminino</option>
						</Select>
					</InputBlock>
				</InputGroup>

				<Legend>
					<h4>Contato</h4>
					<hr />
				</Legend>

				<InputBlock>
					<label htmlFor="phone">Telefone</label>
					<Input
						type="tel"
						id="phone"
						name="phone"
						value={users.phone || ''}
						onChange={handleInputChange}
					/>
				</InputBlock>

				<InputBlock>
					<label htmlFor="zipCode">CEP <span>*</span></label>
					<Input
						id="zipCode"
						name="zipCode"
						value={users.zipCode || ''}
						onChange={handleInputChange}
						required
					/>
				</InputBlock>

				<InputGroup>
					<InputBlock>
						<label htmlFor="address">Endereço <span>*</span></label>
						<Input
							id="address"
							name="address"
							value={users.address || ''}
							onChange={handleInputChange}
							required
						/>
					</InputBlock>

					<InputBlock>
						<label htmlFor="addressNumber">Número <span>*</span></label>
						<Input
							id="addressNumber"
							name="addressNumber"
							value={users.addressNumber || ''}
							onChange={handleInputChange}
							required
						/>
					</InputBlock>
				</InputGroup>

				<InputBlock>
					<label htmlFor="address2">Complemento</label>
					<Input
						id="address2"
						name="address2"
						value={users.address2 || ''}
						onChange={handleInputChange}
					/>
				</InputBlock>

				<InputGroup>
					<InputBlock>
						<label htmlFor="city">Cidade <span>*</span></label>
						<Input
							id="city"
							name="city"
							value={users.city || ''}
							onChange={handleInputChange}
							required
						/>
					</InputBlock>

					<InputBlock>
						<label htmlFor="state">Estado <span>*</span></label>
						<Input
							id="state"
							name="state"
							value={users.state || ''}
							onChange={handleInputChange}
							required
						/>
					</InputBlock>
				</InputGroup>

				<Button type="submit">Salvar</Button>
			</form>
		</>
	);
}
