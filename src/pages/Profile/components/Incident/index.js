import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import PropTypes from 'prop-types';

import { Container, Property, Value, IncidentButton } from './styles';

export default function Incident({ incident, onDelete }) {
  return (
    <Container key={incident.id}>
      <Property>CASO</Property>
      <Value>{incident.title}</Value>

      <Property>DESCRIÇÃO</Property>
      <Value>{incident.description}</Value>

      <Property>VALOR</Property>
      <Value>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value)}
      </Value>

      <IncidentButton type="button" onClick={onDelete}>
        <FiTrash2 size={20} color="#a8a8b3" />
      </IncidentButton>
    </Container>
  );
}

Incident.propTypes = {
  incident: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
