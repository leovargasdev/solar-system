import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg';

import Layout from '../../components/Layout/';
import { Text } from '../../components/Layout/styles';
import InputSearch from '../../components/InputSearch/';
import { Header, NameUser, Name, Categories, Category, ListPlanets, Planet, IconPlanet, NamePlanet } from './styles';

import Asteroids from '../../assets/categories/Asteroids.svg';
import Galaxies from '../../assets/categories/Galaxies.svg';
import Planets from '../../assets/categories/Planets.svg';
import Stars from '../../assets/categories/Stars.svg';

import api from '../../services/api';

interface Planet {
  id: string;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const theme = useTheme();
  const [name, setName] = useState('Leonardo');
  const [planets, setPlanets] = useState<Planet[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadPlanets(){
      const response = await api.get('/planets');
      setPlanets(response.data);
    }
    
    loadPlanets();
  })

  const categories = [
    {name: 'Planetas', color: theme.colors.gradientBlue, icon: <Planets />},
    {name: 'Asteróides', color: theme.colors.gradientPink, icon: <Asteroids />},
    {name: 'Estrelas', color: theme.colors.gradientCyan, icon: <Stars />},
    {name: 'Galáxias', color: theme.colors.gradientYellow, icon: <Galaxies />},
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
            <Planet key={planet.id} onPress={() => navigation.navigate('SearchTab', { screen: 'Planet', params: {id: planet.id}})}>
              <IconPlanet>
                {planet.name === 'Saturno' ? 
                  <SvgUri width={270} height={270} style={{top: -52, left: -80}} uri={planet.image} />
                  : <SvgUri width={170} height={170} uri={planet.image} />
                }
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