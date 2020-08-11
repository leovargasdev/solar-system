import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  margin-top: 48px;
  justify-content: space-between;
`;

export const Box = styled.View`
  margin-top: 30px;
  flex: 1;
  height: 200px;
  flex-direction: row;
  border-radius: 8px;
  position: relative;
  background: ${({theme}) => theme.colors.black};
  overflow: hidden;
`;

export const IconPlanet = styled.View`
  position: absolute;
  left: -24%;
  top: -25%;
`;

export const BoxContent = styled.View`
  padding: 25px 10px;
  justify-content: space-between;
  margin-left: 145px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
