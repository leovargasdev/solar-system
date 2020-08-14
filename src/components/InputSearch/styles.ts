import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  margin-top: 30px;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  background: ${({theme}) => theme.colors.black};
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const Icon = styled(Feather)`
  color: #FFF;
  margin-right: 10px;
`;

export const Input = styled.TextInput`
  background: transparent;
  color: #FFF;
`;
