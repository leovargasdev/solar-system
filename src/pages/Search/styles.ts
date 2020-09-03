import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { PlanetProps } from './index'; 
export const Header = styled.View`
  flex-direction: row;
  margin-top: 48px;
  justify-content: space-between;
`;

export const ItensList = styled(
  FlatList as new () => FlatList<PlanetProps>,
).attrs({
  contentContainerStyle: { paddingTop: 22 },
  showsVerticalScrollIndicator: false,
})``;

export const ItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  height: 200px;
  position: relative;

  margin-top: 30px;
  border-radius: 8px;
  background: ${({theme}) => theme.colors.black};
  overflow: hidden;
`;

export const IconPlanet = styled.View`
  position: absolute;
  left: -24%;
  top: -25%;
`;

export const ItemContent = styled.View`
  flex: 1;
  padding: 24px 10px;
  justify-content: space-between;
  margin-left: 145px;
`;

export const ItemTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
