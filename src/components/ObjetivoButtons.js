
import React, { useState } from 'react';
import { Image, } from 'react-native';
import { RectButton, FlatList, RectButtonProps } from 'react-native-gesture-handler';
import Svg from 'react-native-svg';
import {
  ObjetivoButton,
  ObjetivoButtonLabel,


} from '../styles/ObjetivoButton'

interface ObjetivoButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export const ObjetivoButtons = ({
  title,
  active = true,
  ...rest

}: ObjetivoButtonProps) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <ObjetivoButton
      {...rest}
    >
      <ObjetivoButtonLabel >
        {title}
      </ObjetivoButtonLabel>
    </ObjetivoButton >


  );
}

