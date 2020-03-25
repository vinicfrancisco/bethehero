import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be The Heroe" className="logo" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />

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
