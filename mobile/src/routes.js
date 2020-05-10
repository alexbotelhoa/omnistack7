import 'react-native-gesture-handler'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Styles from './styles'
import Feed from './pages/Feed'
import New from './pages/New'

import logo from './assets/logo.png'
import camera from './assets/camera.png'

function feedStyles({ navigation }) {
  return ({
    headerTitle: <Image source={logo} />,
    headerRight: () => (
      <TouchableOpacity 
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerBackTitle: null
  })
}

const newStyles = {
  title: <Image source={logo} />,
  headerTintColor: '#000',
  headerTitleAlign: 'center',
  headerBackTitle: null
}

const AppStack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
        <AppStack.Navigator initialRouteName="Feed" mode="modal">
          <AppStack.Screen name="Feed" component={Feed} options={feedStyles} />
          <AppStack.Screen name="New" component={New} options={newStyles} />
        </AppStack.Navigator>
    </NavigationContainer>
  )
}