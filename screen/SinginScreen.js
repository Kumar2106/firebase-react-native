import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'
import {Form, Item , Input, Label, Button} from 'native-base'



export default class SinginScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    static navigationOptions = {
        title: "SignIn",
        headerShown: false,
    }

    SignInUser = (email,password)=>{
        firebase.auth()
                .signInWithEmailAndPassword(email,password)
                .then(()=>{
                    this.props.navigation.navigate("Home")
                })
                .catch(error => {
                    alert(error.message)
                })
    }


    render(){
  return (
    <KeyboardAvoidingView
    behavior = "position"
    enabled
    style = {
        styles.container
    }
    >
      <View style= {styles.logoContainer}>
          <Image
          source = {require('../assets/logo.png')}
          />
           <Text>LearnCodeOnline.in</Text>
      </View>
     <Form style = {styles.form}>
        <Item floatingLabel>
            <Label>Email</Label>
            <Input
            autoCorrect = {false}
            autoCapitalize = "none"
            keyboardType = "email-address"
            onChangeText = {email=> this.setState({
                email
            })}
            />
        </Item><Item floatingLabel>
            <Label>Password</Label>
            <Input
            secureTextEntry= {true}
            autoCorrect = {false}
            autoCapitalize = "none"
            keyboardType = "email-address"
            onChangeText = {password=> this.setState({
                password
            })}
            />
        </Item>
        <Button
        style = {styles.button}
        full
        rounded
        onPress = {
            () => {
               this.SignInUser(this.state.email,this.state.password)
            }
        }
        >
        <Text style = {styles.buttonText}>Sign In</Text>
        </Button>
        

     </Form>
     <View style = {styles.footer}>
         <Text>OR</Text>
     </View>
     <TouchableOpacity
     onPress = {()=>{
        this.props.navigation.navigate("SignUp")
     }}
     >
         <Text style ={{alignSelf: 'center', paddingTop: 20}}>Create a new Account ?</Text>
     </TouchableOpacity>

      <StatusBar style="auto" />
      </KeyboardAvoidingView>
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
