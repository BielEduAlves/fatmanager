
import React, { useState, useEffect } from 'react';
import { Image, } from 'react-native';
import { RectButton, FlatList, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import {
  OptionList,
  OptionListLabel,
  OptionListLabelData,
  OptionsImage,
  OptionsListImageFav,
} from '../styles/ExercicioList'

import iconFav1 from "../assets/iconFav1.png";
import iconFav0 from "../assets/iconFav0.png";
import { } from 'react';

interface ExerciciosListProps extends RectButtonProps {
  data: {
    id: number;
    name: string;
    kcal: number;
    like: boolean;
  }
}

export const ExerciciosList = ({ data, ...rest }: ExerciciosListProps) => {
  const [favorito, setFavorito] = useState(Boolean(data.like));

  function handleFavorito() {

    if (favorito) {
      setFavorito(false)
    } else {
      setFavorito(true)
    }
  }


  return (

    <OptionList

      {...rest}
    >
      <OptionListLabel>
        {data.name}
      </OptionListLabel>

      <OptionListLabelData>
        {data.kcal} Kcal/min
      </OptionListLabelData>
      <OptionsListImageFav
        onPress={() => {
          handleFavorito();
        }}
      >
        {favorito ?
          <OptionsImage source={iconFav1} />
          :
          <OptionsImage source={iconFav0} />
        }


      </OptionsListImageFav>

    </OptionList >


  );
}

