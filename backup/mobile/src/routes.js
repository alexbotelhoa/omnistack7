// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';






// import Feed from './pages/Feed'
// import New from './pages/New'

// const AppStack = createStackNavigator();

// function MyStack() {
//    return (
//    <Stack.Navigator>
//       <Stack.Screen name="Feed" component={Feed} />
//       <Stack.Screen name="New" component={New} />
//     </Stack.Navigator>
//    )
// }

// export default function Routes() {
//    return (
//       <NavigationContainer>
//          <MyStack />
//     </NavigationContainer>
//    )
// }








// function HomeScreen() {
//    return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Home Screen</Text>
//      </View>
//    )
//  }
 
//  const Stack = createStackNavigator()
 
//  export default function Routes() {
//    return (
//      <NavigationContainer>
//        <Stack.Navigator>
//          <Stack.Screen name="Home" component={HomeScreen} />
//        </Stack.Navigator>
//      </NavigationContainer>
//    )
//  }


// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }


export default function Routes() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Página de Teste!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})