import styled from 'styled-components/native';


import colors from './colors';
import fonts from './fonts';

export const Container = styled.View`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  padding:10px 10px 0px 10px;
`;

export const Logo = styled.View`
 justify-content:center;
 border:0px solid #000;
 margin:50px 0 15px 0;
 height:115px;
`;
export const CaixaTextoChamada = styled.View`
 flex:1;
 justify-content:center;
 align-items:center;
`;
export const TextoChamada = styled.Text`
 color:${colors.heading};
 font-size:20px;
 font-family:${fonts.heading};
 text-align:center;

`;
export const TextoGrupou = styled.Text`
 font-weight:bold;
`;
export const BackgroundImage = styled.ImageBackground`
width:230%;
height:120%;
position:absolute;
`;

export const CaixaLogin = styled.View`
  background-color:#fff;
  width:100%;
  height:50%;
  border-radius:25px;
  padding:20px;
  margin-bottom:20px;
`;


export const ContainerInputs = styled.View`
  margin-top:30px;
`;
export const InputTexto = styled.Text`
  font-size:18px;
  color:${colors.input};
`;
export const TextInput = styled.TextInput`
  border-bottom-width:1px;
  border-color:${colors.gray};  
  color:${colors.input};
  height:65px;
  padding:0px 20px;
  margin-top:5px;
`;

export const ContainerBotao = styled.View`
  flex-direction:row;
`;

export const ForgotPassword = styled.View`
  align-items:flex-end;
`;
export const TextForgotPassword = styled.Text`
  color:${colors.red};
  font-size:14px;
`;

export const ContainerButtons = styled.View`
  flex-direction:row;
  margin:20px 0 20px 0;
`;
export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 60px;

  border:1px solid ${colors.red};
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.theme ? "10px" : "0px"};
`;

export const ButtonText = styled.Text`

  font-size:16px;
  font-family:${fonts.complement}
`;