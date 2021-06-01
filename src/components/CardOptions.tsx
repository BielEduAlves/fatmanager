
import React from 'react';
import { Image, } from 'react-native';
import { RectButton, FlatList, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import {
  OptionsText,
  OptionsImageContainer,
  OptionsImage,
  Options,
} from '../styles/home'

interface CardOptionsProps extends RectButtonProps {
  data: {
    name: string;
    photo: string,
  }
}

import iconCam from "../assets/iconCam.png";
import iconExercicio from "../assets/iconExercicio.png";
import iconAgua from "../assets/iconAgua.png";
import iconChart from "../assets/iconChart.png";

export const CardOptions = ({ data, ...rest }: CardOptionsProps) => {
  return (

    <Options
      {...rest}
    >
      <OptionsImageContainer>
        <SvgFromUri
          uri={data.photo}
          width={70}
          height={70}
        />
      </OptionsImageContainer>
      <OptionsText>
        {data.name}
      </OptionsText>
    </Options>


  );
}

