import React, { useState, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import Button from '../../components/Button';
import api from '../../services/api';
import { Container, Logo, Form, Title, HeroesImage } from './styles';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleLogon = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const response = await api.post('sessions', { id });

        const { name } = response.data;

        localStorage.setItem('id', id);
        localStorage.setItem('ongName', name);

        history.push('/profile');
      } catch (error) {
        toast.error('Falha ao realizar logon');
      }
    },
    [id, history]
  );

  return (
    <Container>
      <Form>
        <Logo src={logoImage} alt="Be The Heroe" className="logo" />

        <form onSubmit={handleLogon}>
          <Title>Faça seu logon</Title>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <Button type="submit">Entrar</Button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </Form>

      <HeroesImage src={heroesImage} alt="Heroes" className="heroes" />
    </Container>
  );
}
