import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'


export default class LoadingScreen extends React.Component {

    static navigationOptions = {
        title: "Loading",
        headerShown: false,
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((authenticate)=>{
            if (authenticate) {
                this.props.navigation.replace("Home")
            } else {
                this.props.navigation.replace("SignIn")
            }
        })
    }


    render(){
  return (
    <View style={styles.container}>
     <ActivityIndicator
     size= "large"
     
     />
      <StatusBar style="auto" />
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
