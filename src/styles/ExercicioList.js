import styled, { DefaultTheme } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from './colors';
import fonts from './fonts';
import { View } from 'react-native';


export const OptionListContainer = styled.View`
  width:100%;
  height:50px;
  position: relative;
  margin:0 0 5px 0;
  
`;
export const OptionList = styled(RectButton)`
  background-color:${props => props.ativo ? colors.yellow_dark : colors.yellow_light};
  width:100%;
  height:50px;
  border-radius:10px;
  padding: 0 10px 0 10px;
  flex-direction:row;
  align-items:center;
`;
export const OptionListLabel = styled.Text`
  flex:2;
  font-family:${fonts.heading};
  font-size:20px;
  color:${colors.heading};
`;
export const OptionListLabelData = styled.Text`
  font-family:${fonts.heading};
  font-size:12px;
  color:${colors.heading};
  padding-right:10px;
  right: 30px;
   
`;
export const OptionsImage = styled.Image`
  width:40px;
  height: 40px;
`;
export const OptionsListImageFav = styled.TouchableOpacity`
  width:50px;
  height: 50px;
  align-items:center;
  justify-content:center;
  position: absolute;
  right: 0;
  
`;
