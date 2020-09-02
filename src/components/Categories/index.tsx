import React from 'react';
import { useTheme } from 'styled-components';

import { Text } from '../Layout/styles';

import Asteroids from '../../assets/categories/Asteroids.svg';
import Galaxies from '../../assets/categories/Galaxies.svg';
import Planets from '../../assets/categories/Planets.svg';
import Stars from '../../assets/categories/Stars.svg';

import { Container, Category } from './styles';

const Categories: React.FC = () => {
  const { colors } = useTheme();

  const categories = [
    {name: 'Planetas', color: colors.gradientBlue, icon: <Planets />},
    {name: 'Asteróides', color: colors.gradientPink, icon: <Asteroids />},
    {name: 'Estrelas', color: colors.gradientCyan, icon: <Stars />},
    {name: 'Galáxias', color: colors.gradientYellow, icon: <Galaxies />},
  ];

  return (
    <Container>
      {categories.map( category => (
        <Category key={category.name} colors={category.color} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}>
          {category.icon}
          <Text type="small" style={{marginTop: 8}}>{category.name}</Text>
        </Category>
      ))}
    </Container>
  );
};

export default Categories;