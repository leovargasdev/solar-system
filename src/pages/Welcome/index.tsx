import React from 'react';
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Container, SolarSystem, Content, TextOne, TextTwo, ButtonGroup, TextAA, Button, TextBB } from './styles';

const Welcome: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <SolarSystem />
      <Content>
        <TextOne>Aperte o cinto</TextOne>
        <TextTwo>Comece sua jornada pelo sistema solar.</TextTwo>
      </Content>

      <ButtonGroup>
        <TextAA>Pronto para a decolagem?</TextAA>
        <TouchableOpacity onPress={() => navigation.navigate('Root')}>
          <Button colors={theme.colors.gradientButton} start={[0, 1]} end={[1, 0]} >
            <TextBB>Começar agora</TextBB>
            <Feather name="arrow-right" size={18} color="#FFF" />
          </Button>
        </TouchableOpacity>
      </ButtonGroup>
    </Container>
  );
}

export default Welcome;