import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { InputBlock, InputGroup, Input, Legend, Button, Select, DivButton } from './styles';

import api from '../../services/api';

export default function UserForm() {

  const [users, setUsers] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    zipCode: '',
    address: '',
    addressNumber: '',
    address2: '',
    city: '',
    state: '',
    country: '',
  });


  useEffect(() => {
    async function loadUserById() {
      
      const response = await api.get(`/users/`);

      console.log(response.data);
    }
  
    loadUserById();
  }, []);

  async function handleAddUser(e) {
    e.preventDefault();

    const data = {
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      dateOfBirth: users.dateOfBirth,
      gender: users.gender,
      contact: {
        phone: users.phone,
        zipCode: users.zipCode,
        address: users.address,
        addressNumber: users.addressNumber,
        address2: users.address2,
        city: users.city,
        state: users.state,
        country: users.country,
      }
    };

    try {
      await api.post('/users',data);
    
      alert('Usuário salvo com sucesso');
      //props.history.push('/users');

    } catch (error) {
        console.log(error)
    }
  }

  function onChange(e) {
    e.persist();
    setUsers(users => ({...users, [e.target.name]: e.target.value}));
  }


  return (
    <>
    <DivButton>
      <Link to={'/'}>
        <button type="button">Lista de Usuários</button>
      </Link>
    </DivButton>

    <form onSubmit={handleAddUser}>
      <Legend>
        <h4>Dados Pessoais</h4>
        <hr />
      </Legend>

      <InputGroup>
        <InputBlock>
          <label htmlFor="firstName">Primeiro Nome <span>*</span></label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={users.firstName}
            onChange={onChange}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="lastName">Último Nome <span>*</span></label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={users.lastName}
            onChange={onChange}
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
          value={users.email}
          onChange={onChange}
          required
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <label htmlFor="dateOfBirth">Data de Nascimento <span>*</span></label>
          <Input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={users.dateOfBirth}
            onChange={onChange}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="gender">Gênero</label>
          <Select name="gender" id="gender" onChange={onChange}>
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
          value={users.phone}
          onChange={onChange}
        />
      </InputBlock>

      <InputBlock>
        <label htmlFor="zipCode">CEP <span>*</span></label>
        <Input
          type="number"
          id="zipCode"
          name="zipCode"
          value={users.zipCode}
          onChange={onChange}
          required
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <label htmlFor="address">Endereço <span>*</span></label>
          <Input
            type="text"
            id="address"
            name="address"
            value={users.address}
            onChange={onChange}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="addressNumber">Número <span>*</span></label>
          <Input
            type="text"
            id="addressNumber"
            name="addressNumber"
            value={users.addressNumber}
            onChange={onChange}
            required
          />
        </InputBlock>
      </InputGroup>

      <InputBlock>
        <label htmlFor="address2">Complemento</label>
        <Input
          type="text"
          id="address2"
          name="address2"
          value={users.address2}
          onChange={onChange}
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <label htmlFor="city">Cidade <span>*</span></label>
          <Input
            type="text"
            id="city"
            name="city"
            value={users.city}
            onChange={onChange}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="state">Estado <span>*</span></label>
          <Input
            type="text"
            id="state"
            name="state"
            value={users.state}
            onChange={onChange}
            required
          />
        </InputBlock>
      </InputGroup>

      <InputBlock>
        <label htmlFor="country">País <span>*</span></label>
        <Input
          type="text"
          id="country"
          name="country"
          value={users.country}
          onChange={onChange}
          required
        />
      </InputBlock>

      <Button type="submit">Salvar</Button>
    </form>
    </>
  );
}
