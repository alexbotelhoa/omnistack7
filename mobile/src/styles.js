import React from 'react'
// import { StyleSheet } from 'react-native';
import { Image } from 'react-native'

import logo from './assets/logo.png'

const style = {
   Feed: {
      // title: <Image source={logo} />,
      title: 'Teste',
      headerTintColor: '#000',
      headerTitleAlign: 'center',
      headerBackTitle: null
   },
   New: {
      title: <Image source={logo} />,
      headerTintColor: '#000',
      headerTitleAlign: 'center',
      headerBackTitle: null
   }
}

export default function Styles() {
   return style
}