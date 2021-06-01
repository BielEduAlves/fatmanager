import styled, { DefaultTheme } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from './colors';
import fonts from './fonts';

export const OptionList = styled(RectButton)`
  background-color:${colors.yellow_light};
  width:100%;
  height:50px;
  border-radius:10px;
  margin:0 0 5px 0;
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
`;
