import styled from 'styled-components/native';
import BGConstellation from '../../assets/backgrounds/constellation.svg';

export const Container = styled.View`
  flex: 1;
  background: #FFF;
  position: relative;
`;

export const ContainerBG = styled.View`
  position: absolute;
  top: -50px;
  background: #000;
  width: 100%;
  height: 350px;
  border-radius: 32px;
  overflow: hidden;
`;

export const Constellation = styled(BGConstellation)`
  position: absolute;
  left: -600px;
  top: -100px;
`;

export const Content = styled.View`
  width: 100%;
  top: 0;
  left: 0;
  padding: 64px 20px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 32px;
  line-height: 37px;
  color: ${({theme}) => theme.colors.black};
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  line-height: 19px;
  opacity: 0.6;
  color: ${({theme}) => theme.colors.black};
  margin-bottom: 30px;
`;

export const Section = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SectionTitle = styled.Text`
  flex: 1;
  margin-left: 16px;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.black};
`;

interface SectionDescriptionProps {
  actived?: boolean;
}

export const SectionDescription = styled.Text<SectionDescriptionProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 14px;
  line-height: 16px;
  opacity: 0.6;
  padding: 10px 2px 0;
  color: ${({theme}) => theme.colors.black};
  display: ${props => props.actived ? 'flex' : 'none'};
`;

export const Separator = styled.View`
  opacity: 0.08;
  border: 1px solid #151515;
  width: 100%;
  margin: 20px 0;
`;

