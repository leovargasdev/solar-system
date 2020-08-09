import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/Layout/styles';
import { Container, SolarSystem, Content, ButtonGroup, Button, IconButton } from './styles';

const Welcome: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <SolarSystem />
      <Content>
        <Text type="normal" opacity>Aperte o cinto</Text>
        <Text type="title" style={{textAlign: 'center'}}>Comece sua jornada pelo sistema solar.</Text>
      </Content>

      <ButtonGroup>
        <Text type="small">Pronto para a decolagem?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Root')}>
          <Button colors={theme.colors.gradientButton} start={[0, 1]} end={[1, 0]} >
            <Text type="normal" bold>Começar agora</Text>
            <IconButton name="arrow-right" size={18}/>
          </Button>
        </TouchableOpacity>
      </ButtonGroup>
    </Container>
  );
}

export default Welcome;