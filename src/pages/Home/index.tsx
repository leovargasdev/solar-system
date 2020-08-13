import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import Layout from '../../components/Layout/';
import { Text } from '../../components/Layout/styles';
import InputSearch from '../../components/InputSearch/';
import { Header, NameUser, Name, Categories, Category, ListPlanets, Planet, IconPlanet, NamePlanet } from './styles';

import Asteroids from '../../assets/categories/Asteroids.svg';
import Galaxies from '../../assets/categories/Galaxies.svg';
import Planets from '../../assets/categories/Planets.svg';
import Stars from '../../assets/categories/Stars.svg';

import Earth from '../../assets/planets/earth.svg';
import Jupiter from '../../assets/planets/jupiter.svg';
import Mars from '../../assets/planets/mars.svg';
import Mercury from '../../assets/planets/mercury.svg';
import Neptune from '../../assets/planets/neptune.svg';
import Pluto from '../../assets/planets/pluto.svg';
import Saturn from '../../assets/planets/saturn.svg';
import Sun from '../../assets/planets/sun.svg';
import Uranus from '../../assets/planets/uranus.svg';
import Venus from '../../assets/planets/venus.svg';

const Home: React.FC = () => {
  const theme = useTheme();
  const [name, setName] = useState('Leonardo');
  const navigation = useNavigation();

  const categories = [
    {name: 'Planetas', color: theme.colors.gradientBlue, icon: <Planets />},
    {name: 'Asteróides', color: theme.colors.gradientPink, icon: <Asteroids />},
    {name: 'Estrelas', color: theme.colors.gradientCyan, icon: <Stars />},
    {name: 'Galáxias', color: theme.colors.gradientYellow, icon: <Galaxies />},
  ];

  const planets = [
    {name: 'Júpter', icon: <Jupiter width={164} height={164}/>},
    {name: 'Marte', icon: <Mars width={164} height={164}/>},
    {name: 'Mercúrio', icon: <Mercury width={164} height={164}/>},
    {name: 'Netuno', icon: <Neptune width={164} height={164}/>},
    {name: 'Plutão', icon: <Pluto width={164} height={164}/>},
    {name: 'Saturno', icon: <Saturn width={270} height={270} style={{top: -50, left: -80}}/>},
    {name: 'Sol', icon: <Sun width={164} height={164}/>},
    {name: 'Terra', icon: <Earth width={164} height={164}/>},
    {name: 'Urânio', icon: <Uranus width={164} height={164}/>},
    {name: 'Vênus', icon: <Venus width={164} height={164}/>},
  ];

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
        <Header>
          <NameUser>
            <Text type="title" bold>Olá, </Text>
            <Name>{name}</Name>
          </NameUser>
          <Feather color="#FFF" size={26} name="settings"/>
        </Header>

        <Text type="normal" style={{marginTop: 5}}>O que você vai apreder hoje?</Text>

        <InputSearch />

        <Text type="normal" style={{marginTop: 30, marginBottom: 20}}>Categorias</Text>

        <Categories>
          {categories.map( category => (
            <Category key={category.name} colors={category.color} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}>
              {category.icon}
              <Text type="small" style={{marginTop: 8}}>{category.name}</Text>
            </Category>
          ))}
        </Categories>

        <Text type="normal" style={{marginTop: 40, marginBottom: 20}}>Planetas</Text>

        <ListPlanets>
          {planets.map(planet=> (
            <Planet key={planet.name} onPress={() => navigation.navigate('SearchTab', { screen: 'Planet'})}>
              <IconPlanet>
                {planet.icon}
              </IconPlanet>
              <NamePlanet>
                <Text type="normal" bold>{planet.name}</Text>
                <Feather name="arrow-right" size={18} color="#EF5F53"/>
              </NamePlanet>
            </Planet>
          ))}
        </ListPlanets>
      </ScrollView>
    </Layout>
  );
}

export default Home;