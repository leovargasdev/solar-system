import React from 'react';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import { useRoute, RouteProp } from '@react-navigation/native';

import Layout from '../../components/Layout/';
import { Text } from '../../components/Layout/styles';
import InputSearch from '../../components/InputSearch/';

import { Header, Box, IconPlanet, BoxContent, Title, Button} from './styles';

import Neptune from '../../assets/planets/neptune.svg';
import Mars from '../../assets/planets/mars.svg';

// type ParamList = {
//   Search: {
//     query: string;
//   };
// };

const Search: React.FC = () => {
  // const route = useRoute<RouteProp<ParamList, 'Search'>>();
  // console.log('aaaaaa', route.params.query);

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
        <Header>
          <Feather color="#FFF" size={26} name="arrow-left"/>
          <Feather color="#FFF" size={26} name="settings"/>
        </Header>

        <Text type="title" style={{marginTop: 20}}>Resultados da busca</Text>
      
        <InputSearch />

        <Box>
          <IconPlanet>
            <Neptune width={225} height={225}/>
          </IconPlanet>
          <BoxContent>
            <Title>
              <Text type="title" style={{flex: 1}}>Netuno</Text>
              <Feather name="bookmark" size={26} color="#FFF"/>
            </Title>
            <Text type="small" opacity>Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação...</Text>
            <Button onPress={() => {}}>
              <Text type="small" bold>Continue lendo</Text>
              <Feather name="arrow-right" size={18} color="#EF5F53" style={{marginLeft: 8}}/>
            </Button>
          </BoxContent>
        </Box>

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