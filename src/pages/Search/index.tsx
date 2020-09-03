import React, {useEffect, useState, useCallback} from 'react';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import Layout from '../../components/Layout/';
import { Text } from '../../components/Layout/styles';
import InputSearch from '../../components/InputSearch/';

import { Header, ItensList, ItemContainer, ItemContent, IconPlanet, ItemTitle, Button} from './styles';

// import Mars from '../../assets/planets/mars.svg';

import api from '../../services/api';

type SearchRouteProps = {
  params: {
    query: string;
  };
};

export interface PlanetProps {
  id: string;
  name: string;
  image: string;
  resume: string;
}

const Search: React.FC = () => {
  const navigate = useNavigation();
  const {
    params: { query },
  } = useRoute() as SearchRouteProps;
  
  const [listPlanets, setListPlanets] = useState<PlanetProps[]>([]);
  // Atualiza os itens, sem precisar recarregar a página
  const handleNewSearch = useCallback((textSearch: string) => {
    api.get(`find/${textSearch}`).then( response => setListPlanets(response.data));
  }, []);

  useEffect(() => handleNewSearch(query), []);

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
      
        <InputSearch value={query} onSubmit={handleNewSearch}/>

        <ItensList
          data={listPlanets}
          keyExtractor={planet => planet.id}
          renderItem={({ item: planet }) => (
            <ItemContainer key={planet.id}>
              <IconPlanet>
                {planet.name === 'Saturno' ? 
                  <SvgUri width={360} height={360} style={{top: -52, left: -125}} uri={planet.image} />
                  : <SvgUri width={225} height={225} uri={planet.image} />
                }
              </IconPlanet>
              <ItemContent>
                <ItemTitle>
                  <Text type="title">{planet.name}</Text>
                  <Feather name="bookmark" size={26} color="#FFF"/>
                </ItemTitle> 
                <Text type="small" opacity>{planet.resume.slice(0, 93).concat('...')}</Text>
                <Button onPress={() => {}}>
                  <Text type="small" bold>Continue lendo</Text>
                  <Feather name="arrow-right" size={18} color="#EF5F53" style={{marginLeft: 8}}/>
                </Button>
              </ItemContent>
            </ItemContainer>
          )}
        />

        <Text type="normal" style={{marginTop: 30}}>Você também pode gostar</Text>

        {/* <Box>
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
        </Box> */}
      </ScrollView>
    </Layout>
  );
}

export default Search;