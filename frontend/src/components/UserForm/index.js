import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { InputBlock, InputGroup, Input, Legend, Button, Select, DivButton } from './styles';

export default function UserForm({ onSubmit }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    await onSubmit({
      firstName,
      lastName,
      email,
      dateOfBirth,
      gender,
      contact: {
        phone,
        zipCode,
        address,
        addressNumber,
        address2,
        city,
        state,
        country,
      }
    });
  }

  return (
    <>
    <DivButton>
      <Link to={'/'}><button type="button">Lista de Usuáris</button></Link>
    </DivButton>

    <form onSubmit={handleSubmit}>
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
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="lastName">Último Nome <span>*</span></label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
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
          value={email}
          onChange={e => setEmail(e.target.value)}
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
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="gender">Gênero</label>
          <Select name="gender" id="gender">
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
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </InputBlock>

      <InputBlock>
        <label htmlFor="zipCode">CEP <span>*</span></label>
        <Input
          type="number"
          id="zipCode"
          name="zipCode"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
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
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="addressNumber">Número <span>*</span></label>
          <Input
            type="text"
            id="addressNumber"
            name="addressNumber"
            value={addressNumber}
            onChange={e => setAddressNumber(e.target.value)}
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
          value={address2}
          onChange={e => setAddress2(e.target.value)}
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <label htmlFor="city">Cidade <span>*</span></label>
          <Input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="state">Estado <span>*</span></label>
          <Input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={e => setState(e.target.value)}
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
          value={country}
          onChange={e => setCountry(e.target.value)}
          required
        />
      </InputBlock>

      <Button type="submit">
        Salvar
      </Button>
    </form>
    </>
  );
}
