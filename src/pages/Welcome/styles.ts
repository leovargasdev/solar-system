import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 

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
  align-items: center;
`;

export const ButtonGroup = styled.View`
  position: absolute;
  width: 206px;
  height: 83px;
  top: 70%;
  align-items: center;
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

export const IconButton = styled(Feather)`
  color: #FFF;
  padding-left: 8px;
`;