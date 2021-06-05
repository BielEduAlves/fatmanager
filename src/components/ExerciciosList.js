
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
  OptionListContainer
} from '../styles/ExercicioList'

import iconFav1 from "../assets/iconFav1.png";
import iconFav0 from "../assets/iconFav0.png";
import { } from 'react';


export const ExerciciosList = ({ data, ...rest }) => {
  const [favorito, setFavorito] = useState(Boolean(data.like));
  const [selected, setSelected] = useState(null);



  function handleFavorito() {
    favorito ? setFavorito(false) : setFavorito(true)
  }
  function handleSelect(data) {
    console.log('atual: ', selected);
    setSelected(data.id);



    console.log('ultimo: ', selected);
  }


  return (

    <OptionListContainer>
      <OptionList
        {...rest}
        onPress={() => {
          handleSelect(data);
        }}
        ativo={

          selected == data.id ? true : false
        }
      >
        <OptionListLabel>
          {data.nome}
        </OptionListLabel>

        <OptionListLabelData>
          {data.kcal} Kcal/min
        </OptionListLabelData>
      </OptionList >

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
    </OptionListContainer>

  );
}

