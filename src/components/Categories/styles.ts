import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 77px;
  border-radius: 8px;
`;