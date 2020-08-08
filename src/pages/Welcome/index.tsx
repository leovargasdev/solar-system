import React from 'react';

import { Container, Title } from './styles';

import SolarSystem from '../../components/SolarSystem';

const Welcome: React.FC = () => {
  return (
    <Container>
        <SolarSystem />
        <Title>Tab Welcome</Title>
    </Container>
  );
}

export default Welcome;