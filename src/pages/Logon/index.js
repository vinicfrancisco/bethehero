import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

import './styles.css';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleLogon = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      const { name } = response.data;

      localStorage.setItem('id', id);
      localStorage.setItem('ongName', name);

      history.push('/profile');
    } catch (error) {
      alert('Falha ao realizar logon');
    }
  }, [id]);

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be The Heroe" className="logo" />

        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" className="heroes" />
    </div>
  );
}
