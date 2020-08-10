import React from 'react';
import { View } from 'react-native';
import {Feather} from '@expo/vector-icons';

import { 
  Container, ContainerBG, Constellation, Content, Header, ContentTitle, Title, Description, Section, SectionTitle, Separator
} from './styles';

import Mars from '../../assets/planets/mars.svg';

const Planet: React.FC = () => {

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

        <Section>
          <Feather name="chevron-down" size={24} color="black" />
          <SectionTitle>Introdução</SectionTitle>
        </Section>

        <Separator />

        <Section>
          <Feather name="chevron-down" size={24} color="black" />
          <SectionTitle>Características Físicas</SectionTitle>
        </Section>

        <Separator />

        <Section>
          <Feather name="chevron-down" size={24} color="black" />
          <SectionTitle>Hidrologia</SectionTitle>
        </Section>

        <Separator />

        <Section>
          <Feather name="chevron-down" size={24} color="black" />
          <SectionTitle>Geografia</SectionTitle>
        </Section>
      </Content>
    </Container>
  );
}

export default Planet;