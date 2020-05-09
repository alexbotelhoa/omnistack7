import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
   return (
   <View style={styles.body}>
      <Text style={styles.welcome}>Welcome também!</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
  },
  welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10
  }
});

export default App;
