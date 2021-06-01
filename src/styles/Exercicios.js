import styled, { DefaultTheme } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from './colors';
import fonts from './fonts';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  padding:20px 0 0 0;
  width:100%;
  background-color:${colors.background};
`;
export const ContainerTop = styled.View`
  padding:20px 10px 60px 10px;
  width:100%;
  margin-bottom:55px;
  justify-content:center;
  align-items:center;
  background-color:${colors.shape};
`;
export const ContainerTopImage = styled.View`
  width:100%;
  height:120px;
  align-items:center;
`;
export const ImageTop = styled.Image`
  width:120px;
  height:120px;
`;
export const TitleTextTop = styled.Text`
  font-family:${fonts.heading};
  font-size:25px;
  color:${colors.heading};
  margin:0 0 10px 0;
  text-align:center;
`;
export const TextTop = styled.Text`
  font-family:${fonts.text};
  font-size:20px;
  color:${colors.heading};
  text-align:center;
`;
export const ReminderContainer = styled.View`
  padding:20px;
  background-color:${colors.blue_light};
  width:90%;
  height:90px;
  border-radius:20px;
  justify-content:space-between;
  flex-direction:row;
  bottom:-45px;
  position:absolute;
`;
export const ReminderImageContainer = styled.View`
  width:60px;
  height:100%;
  align-items:center;
  margin-bottom:15px;
`;
export const ReminderImage = styled.Image`
  width:50px;
  height:50px;
`;
export const ReminderText = styled.Text`
  font-family:${fonts.heading};
  font-size:15px;
  color:${colors.blue};
  width:185px;
  text-align:justify;
`;
export const ContainerOptions = styled.View`
  flex:1;
  padding:0 25px;
  width:100%;
`;
export const ContainerButtons = styled.View`
  flex-direction:row;
  margin:5px 0 0 0;
`;
export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 60px;
  background-color: ${props => props.invert ? colors.red_dark : colors.red};
  border:1px solid ${colors.red};
  border-radius:15px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.invert ? "10px" : "0px"};
`;

export const ButtonText = styled.Text`
  color:${props => props.invert ? colors.red : "#fff"};
  font-size:20px;
  font-family:${fonts.complement};
`;

export const ObjetivoList = styled.View`
  width:85%;
  flex-direction:row;
  margin:0 0 5px 0;
  border:0px solid ${colors.red};
`;

