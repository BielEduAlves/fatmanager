import styled, { DefaultTheme } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from './colors';
import fonts from './fonts';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  margin-top: 25px;
  padding:10px 20px 0px 20px;
  width:100%;
  background-color:${colors.background};
`;
export const ContaineHeader = styled.View`
  flex-direction:column;
  justify-content:flex-start;
  padding:0 10px 0px 10px;
  width:100%;
  position:relative;
  margin:0 0 20px 0;
`;
export const OlaText = styled.Text`
  font-family:${fonts.complement};
  font-size:32px;
  color:${colors.heading};
`;
export const NameText = styled.Text`
  font-family:${fonts.heading};
  font-size:32px;
  color:${colors.heading};
`;
export const ContainerFoto = styled.View`
  justify-content:center;
  align-items:center;
  padding:0 10px 0px 10px;
  width:80px;
  height:80px;
  border-radius:40px;
  background-color:${colors.red_dark};
  position:absolute;
  right:0;
`;

export const ContaineDados = styled.View`
  flex-direction:column;
  justify-content:flex-start;
  padding:0 10px 0px 10px;
  background-color:${colors.shape};
  width:100%;
  min-height:130px;
  position:relative;
  border-radius:20px;
  margin-bottom:15px;
`;
export const ContainerOptions = styled.View`
  flex:1;
  padding:0;
`;
export const OptionsImageContainer = styled.View`
  width:100%;
  height: 100px;
  align-items:center;
  justify-content:center;
`;
export const OptionsImage = styled.Image`
  width:90px;
  height: 90px;
`;
export const OptionsText = styled.Text`
  font-family:${fonts.heading};
  font-size:17px;
  color:${colors.heading};
`;

export const Options = styled(RectButton)`
  
  background-color:${colors.shape};
  width:45%;
  height:130px;
  border-radius:20px;
  align-items:center;
  margin:0 20px 20px 0;
`;