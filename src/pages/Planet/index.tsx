import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

import { 
  Container, 
  ContainerBG,
  Constellation,
  Content,
  Header,
  ContentTitle,
  Title,
  Description,
  Section,
  SectionTitle,
  SectionDescription,
  SectionDescriptionView,
  Separator,
  FeaturesContent,
  FeaturesLegend,
  FeaturesValue
} from './styles';

import api from '../../services/api';

interface PlanetProps {
  id: string;
  name: string;
  image: string;
}

type PlanetRouteProps = {
  Params: {
    id: string;
  }
}

const Planet: React.FC = () => {
  const navigate = useNavigation();
  const route = useRoute<RouteProp<PlanetRouteProps, 'Params'>>();

  const [planet, setPlanet] = useState<PlanetProps>({} as PlanetProps);

  useEffect(() => {
    async function loadPlanet(){
      const response = await api.get(`planet/${route.params.id}`);
      setPlanet(response.data);
    }
    loadPlanet();
  }, [route]);
  
  const [introSection, setIntroSection] = useState(false);
  const [featuresSection, setFeaturesSection] = useState(false);
  const [hydrologySection, setHydrologySection] = useState(false);
  const [geographySection, setGeographySection] = useState(false);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
        <ContainerBG>
          <Constellation />
        </ContainerBG>
        <Content>
          <Header>
            <TouchableWithoutFeedback onPress={() => navigate.goBack()}>
              <Feather color="#FFF" size={25} name="arrow-left"/>
            </TouchableWithoutFeedback>

            {planet.name === 'Saturno' ? 
              <SvgUri width={330} height={330} uri={planet.image} style={{top: 20, left: -30, bottom: 0}}/>
              : <SvgUri width={280} height={280} uri={planet.image} />
            }

            <Feather name="settings" size={25} color="#FFF"/>
          </Header>
          <ContentTitle style={{marginTop: planet.name === 'Saturno' ? -30 : 0}}>
            <Title>{planet.name}</Title>
            <View style={{flexDirection: 'row'}}>
              <Feather name="bookmark" size={28} color="#151515" style={{marginRight: 16}} />
              <Feather name="share-2" size={28} color="#151515" />
            </View>
          </ContentTitle>
          <Description>
            Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem 
            ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro 
            predominante em sua superfície lhe dá uma aparência avermelhada.
          </Description>

          <View>
            <Section onPress={() => setIntroSection(!introSection)}>
              {introSection ? <Feather name="chevron-right" size={24} color="black" /> : <Feather name="chevron-down" size={24} color="black" />}
              <SectionTitle>Introdução</SectionTitle>
            </Section>
            <SectionDescription actived={introSection}>
              Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem 
              ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro 
              predominante em sua superfície lhe dá uma aparência avermelhada.
            </SectionDescription>
          </View>

          <Separator />

          <View>
            <Section onPress={() => setFeaturesSection(!featuresSection)}>
              {featuresSection ? <Feather name="chevron-right" size={24} color="black" /> : <Feather name="chevron-down" size={24} color="black" />}
              <SectionTitle>Características</SectionTitle>
            </Section>
            <SectionDescriptionView actived={featuresSection}>
              <FeaturesContent>
                <FeaturesLegend>Raio</FeaturesLegend>
                <FeaturesValue>2439 Km</FeaturesValue>
              </FeaturesContent>
              <FeaturesContent>
                <FeaturesLegend>Período Orbital</FeaturesLegend>
                <FeaturesValue>87,969 dias</FeaturesValue>
              </FeaturesContent>
              <FeaturesContent>
                <FeaturesLegend>Velocidade Orbital</FeaturesLegend>
                <FeaturesValue>47,362 km/s</FeaturesValue>
              </FeaturesContent>
              <FeaturesContent>
                <FeaturesLegend>Distância do Sol</FeaturesLegend>
                <FeaturesValue>57.910.000 km</FeaturesValue>
              </FeaturesContent>
              <FeaturesContent>
                <FeaturesLegend>Número de Satélites</FeaturesLegend>
                <FeaturesValue>0</FeaturesValue>
              </FeaturesContent>
              <FeaturesContent>
                <FeaturesLegend>Temperatura Média</FeaturesLegend>
                <FeaturesValue>166 °C</FeaturesValue>
              </FeaturesContent>
            </SectionDescriptionView>
          </View>

          <Separator />

          <View>
            <Section onPress={() => setHydrologySection(!hydrologySection)}>
              {hydrologySection ? <Feather name="chevron-right" size={24} color="black" /> : <Feather name="chevron-down" size={24} color="black" />}
              <SectionTitle>Hidrologia</SectionTitle>
            </Section>
            <SectionDescription actived={hydrologySection}>
              Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem 
              ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro 
              predominante em sua superfície lhe dá uma aparência avermelhada.
            </SectionDescription>
          </View>

          <Separator />

          <View>
            <Section onPress={() => setGeographySection(!geographySection)}>
              {geographySection ? <Feather name="chevron-right" size={24} color="black" /> : <Feather name="chevron-down" size={24} color="black" />}
              <SectionTitle>Geografia</SectionTitle>
            </Section>
            <SectionDescription actived={geographySection}>
              Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem 
              ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro 
              predominante em sua superfície lhe dá uma aparência avermelhada.
            </SectionDescription>
          </View>

        </Content>
      </ScrollView>
    </Container>
  );
}

export default Planet;