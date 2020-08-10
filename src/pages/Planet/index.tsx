import React, { useState } from 'react';
import { View } from 'react-native';
import {Feather} from '@expo/vector-icons';

import { 
  Container, ContainerBG, Constellation, Content, Header, ContentTitle, Title, Description, Section, SectionTitle, SectionDescription, Separator
} from './styles';

import Mars from '../../assets/planets/mars.svg';

const Planet: React.FC = () => {
  const [introSection, setIntroSection] = useState(false);
  const [featuresSection, setFeaturesSection] = useState(false);
  const [hydrologySection, setHydrologySection] = useState(false);
  const [geographySection, setGeographySection] = useState(false);

  return (
    <Container>
      <ContainerBG>
        <Constellation />
      </ContainerBG>
      <Content>
        <Header>
          <Feather name="arrow-left" size={25} color="#FFF"/>
          <Mars width={280} height={280}/>
          <Feather name="settings" size={25} color="#FFF"/>
        </Header>
        <ContentTitle>
          <Title>Marte</Title>
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
            <SectionTitle>Características Físicas</SectionTitle>
          </Section>
          <SectionDescription actived={featuresSection}>
            Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem 
            ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro 
            predominante em sua superfície lhe dá uma aparência avermelhada.
          </SectionDescription>
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
    </Container>
  );
}

export default Planet;