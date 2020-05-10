import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Feed from './pages/Feed'
import New from './pages/New'

const AppStack = createStackNavigator();

export default function Routes() {
   return (
      <NavigationContainer>

         <AppStack.Navigator>
            <AppStack.Screen name="Feed" component={Feed} />
            <AppStack.Screen name="New" component={New} />
         </AppStack.Navigator>

      </NavigationContainer>
   );
}
