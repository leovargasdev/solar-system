import styled from 'styled-components/native';

interface TextProps {
  size: Number;
};

export const Title = styled.Text<TextProps>`
  font-size: ${props => `${props.size}px`};
  font-weight: 700;
  color: #FFF;
`;