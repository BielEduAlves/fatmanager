import styled from 'styled-components/native';
import colors from './colors';
import fonts from './fonts';

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
export const ButtonLogout = styled.TouchableOpacity`
  flex:1;
  position: absolute;
  right: 100px;
  width:50px;
  height: 30px;
  background-color: ${props => props.invert ? "#fff" : colors.red};
  border:1px solid ${colors.red};
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.theme ? "10px" : "0px"};
`;

export const ButtonLogoutText = styled.Text`
  color:${props => props.invert ? colors.red : "#fff"};
  font-size:12px;
  font-family:${fonts.complement}
`;