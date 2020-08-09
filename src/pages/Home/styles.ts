import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const NameUser = styled.View`
  flex-direction: row;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 32px;
  line-height: 37px;
  color: #FFF;
`;

export const Categories = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const ListPlanets = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``;

export const Planet = styled.TouchableOpacity`
  position: relative;
  width: 140px;
  height: 190px;
  border-radius: 8px;
  margin-right: 16px;
  background: ${({theme}) => theme.colors.black};
  justify-content: flex-end;
  overflow: hidden;
`;

export const IconPlanet = styled.View`
  position: absolute;
  left: -38.57%;
  right: 21.43%;
  top: -15.79%;
  bottom: 29.47%;
`;

export const NamePlanet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px 16px;
`;
