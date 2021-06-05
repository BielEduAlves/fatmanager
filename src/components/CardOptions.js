
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

export const CardOptions = ({ data, ...rest }) => {
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

