import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class SinginScreen extends React.Component {
    render(){
  return (
    <View style={styles.container}>
      <Text>Signin Screen</Text>
      <StatusBar style="auto" />
    </View>
  );}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    form: {
      padding: 20,
      width: "100%",
      marginBottom: 30
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    }
  });
