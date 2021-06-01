import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from './colors';
import fonts from './fonts';

export const ObjetivoButton = styled(RectButton)`
  background-color:${props => props.active ? colors.red_dark : colors.red_light};
  height:40px;

  border-radius:10px;
  margin:0 5px 0 0;
  padding: 0 10px 0 10px;
  justify-content:center;
  align-items:center;
`;
export const ObjetivoButtonLabel = styled.Text`
  font-family:${fonts.text};
  font-size:15px;
  color:${colors.heading};
`;