import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed'
import New from './pages/New'

const AppStack = createStackNavigator();

function MyStack() {
   return (
   <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="New" component={New} />
    </Stack.Navigator>
   )
}

export default function Routes() {
   return (
      <NavigationContainer>
         <MyStack />
    </NavigationContainer>
   )
}