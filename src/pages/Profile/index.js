import React, { useState, useEffect, useCallback } from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import logoImage from '~/assets/logo.svg';

import api from '../../services/api';
import Incident from './components/Incident';
import {
  Container,
  Header,
  HeaderLogo,
  HeaderTitle,
  HeaderButton,
  LogoutButton,
  Title,
  IncidentsList,
} from './styles';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem('id');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await api.get('profile', {
          headers: {
            Authorization: ongId,
          },
        });

        setIncidents(response.data);
      } catch (error) {
        toast.error('Falha ao carregar perfil');
      }
    }

    loadProfile();
  }, [ongId]);

  const handleLogout = useCallback(() => {
    localStorage.clear();
    history.push('/');
  }, [history]);

  const handleDelete = useCallback(
    async (id) => {
      try {
        await api.delete(`incidents/${id}`, {
          headers: {
            Authorization: ongId,
          },
        });

        setIncidents(incidents.filter((incident) => incident.id !== id));
      } catch (error) {
        toast.error('Erro ao deletar incidente');
      }
    },
    [incidents, ongId]
  );

  return (
    <Container>
      <Header>
        <HeaderLogo src={logoImage} alt="Be The Hero" />
        <HeaderTitle>{`Bem-vinda, ${ongName}`}</HeaderTitle>

        <HeaderButton to="/incidents/new">Cadastrar novo caso</HeaderButton>

        <LogoutButton type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041 " />
        </LogoutButton>
      </Header>

      <Title>Casos cadastrados</Title>

      <IncidentsList>
        {incidents.map((incident) => (
          <Incident
            key={incident.id}
            incident={incident}
            onDelete={() => handleDelete(incident.id)}
          />
        ))}
      </IncidentsList>
    </Container>
  );
}
