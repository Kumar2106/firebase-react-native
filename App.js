import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import all screens
import HomeScreen from './screen/HomeScreeen'
import LoadingScreen from './screen/LoadingScreen'
import SignupScreen from './screen/SignupScreen'
import SigninScreen from './screen/SinginScreen'


const firebaseConfig = {
  apiKey: "AIzaSyCP6KDikIsd8HtItpvW5BC4Wj9WqU77SI8",
  authDomain: "reactbootcamp-5bca1.firebaseapp.com",
  databaseURL: "https://reactbootcamp-5bca1.firebaseio.com",
  projectId: "reactbootcamp-5bca1",
  storageBucket: "reactbootcamp-5bca1.appspot.com",
  messagingSenderId: "759357053992",
  appId: "1:759357053992:web:2774be0717282bfbfb691d",
  measurementId: "G-EZ3JEQXS04"
};

firebase.initializeApp(firebaseConfig);




const MainNavigator = createStackNavigator({
  LoadingScreen: {
    screen: LoadingScreen
  },
  SignIn: {
    screen: SigninScreen
  },
  SignUp: {
    screen: SignupScreen
  },
  Home: {
    screen: HomeScreen
  },
  
},{
  //lauch screen
  initialRouteName: "LoadingScreen"
})

//create app container

const App = createAppContainer(MainNavigator)
export default App