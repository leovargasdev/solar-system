import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import BGSolarSystem from '../../assets/backgrounds/solar-system.svg';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const SolarSystem = styled(BGSolarSystem)`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -200px;
`;

export const Content = styled.View`
  position: absolute;
  width: 304px;
  height: 103px;
  top: 290px;
`;

export const TextOne = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.65;
`;

export const TextTwo = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #FFFFFF;
`;

export const ButtonGroup = styled.View`
  position: absolute;
  width: 206px;
  height: 83px;
  top: 70%;
  align-items: center;
`;

export const TextAA = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

export const Button = styled(LinearGradient)`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  width: 206px;
  height: 51px;

  border-radius: 8px;
`;

export const TextBB = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  line-height: 19px;
  color: #FFF;
  padding-right: 8px;
`;