import React, {useEffect, useState} from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';

import Layout from '../../components/Layout/';
import { Text } from '../../components/Layout/styles';
import InputSearch from '../../components/InputSearch/';

import { Header, Box, IconPlanet, BoxContent, Title, Button} from './styles';

import Neptune from '../../assets/planets/neptune.svg';
import Mars from '../../assets/planets/mars.svg';

import api from '../../services/api';

type SearchRouteProps = {
  Search: {
    query: string;
  };
};

interface PlanetProps {
  id: string;
  name: string;
  image: string;
  resume: string;
}

const Search: React.FC = () => {
  const navigate = useNavigation();
  const {params: { query }} = useRoute<RouteProp<SearchRouteProps, 'Search'>>();
  
  const [listPlanets, setListPlanets] = useState<PlanetProps[]>([]);
  
  useEffect(() => {
    async function loadSearch(){
      const response = await api.get(`find/${query}`);
      console.log(response.data);
      setListPlanets(response.data);
    }
    loadSearch();
  }, []);

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
        <Header>
          <TouchableWithoutFeedback onPress={() => navigate.goBack()}>
            <Feather color="#FFF" size={26} name="arrow-left"/>
          </TouchableWithoutFeedback>
          <Feather color="#FFF" size={26} name="settings"/>
        </Header>

        <Text type="title" style={{marginTop: 20}}>Resultados da busca</Text>
      
        <InputSearch value="adasd"/>

        {listPlanets.map(planet => (
          <Box key={planet.id}>
            <IconPlanet>
              <Neptune width={225} height={225}/>
            </IconPlanet>
            <BoxContent>
              <Title>
                <Text type="title" style={{flex: 1}}>{planet.name}</Text>
                <Feather name="bookmark" size={26} color="#FFF"/>
              </Title> 
              <Text type="small" opacity>{planet.resume.slice(0, 96).concat('...')}</Text>
              <Button onPress={() => {}}>
                <Text type="small" bold>Continue lendo</Text>
                <Feather name="arrow-right" size={18} color="#EF5F53" style={{marginLeft: 8}}/>
              </Button>
            </BoxContent>
          </Box>
        ))}

        <Text type="normal" style={{marginTop: 30}}>Você também pode gostar</Text>

        <Box>
          <IconPlanet>
            <Mars width={225} height={225}/>
          </IconPlanet>
          <BoxContent>
            <Title>
              <Text type="title" style={{flex: 1}}>Marte</Text>
              <Feather name="bookmark" size={26} color="#FFF"/>
            </Title>
            <Text type="small" opacity>Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homena...</Text>
            <Button onPress={() => {}}>
              <Text type="small" bold>Continue lendo</Text>
              <Feather name="arrow-right" size={18} color="#EF5F53" style={{marginLeft: 8}}/>
            </Button>
          </BoxContent>
        </Box>
      </ScrollView>
    </Layout>
  );
}

export default Search;