import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 30,
  },

  selectButton: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#CCC',
      borderStyle: 'dashed',
      height: 42,

      justifyContent: 'center',
      alignItems: 'center',
  },

  selectButtonText: {
      fontSize: 16,
      color: '#666',
  },

  preview: {
      width: 100,
      height: 100,
      marginTop: 10,
      alignSelf: 'center',
      borderRadius: 4,
  },

  input: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 15,
      marginTop: 10,
      fontSize: 16,
  },

  shareButton: {
      backgroundColor: '#7159c1',
      borderRadius: 4,
      height: 42,
      marginTop: 15,

      justifyContent: 'center',
      alignItems: 'center',
  },

  shareButtonText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#FFF',
  },
})