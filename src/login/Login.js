import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Register from './Register'

export default class Loginer extends Component {
      static navigationOptions = ({ navigation }) => {
            const { params = {} } = navigation.state;
            let tabBarLabel = 'Login';   
            let tabBarIcon = () => (
            <Image
                  source={require('../../images/icon_login.png')}
                  style={{ width: 26, height: 26 }}
            />
            );    
            return { tabBarLabel, tabBarIcon };
        }

      render() { 
            return(
                  <SafeAreaView style={styles.container}>
                        <StatusBar barStyle='light-content'></StatusBar>
                        <KeyboardAvoidingView style={ styles.container}>
                              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                              <View style ={styles.container}>
                                    <View style={styles.logoContainer}>
                                          <Image style={ styles.logo}
                                                source={require('../../images/EFE_logo.png')}
                                          ></Image>
                                          <Text style={styles.title}>You trust, our success</Text>
                                    </View>
                                    <View style={styles.infoContainer}>
                                          <TextInput style={styles.input}
                                                placeholder='Enter username/email'
                                                placeholderTextColor='rgba(255,255,255,0.8)'
                                                keyboardType='email-address'
                                                returnKeyType='next'
                                                autoCorrect={false}
                                                // onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                                // onChangeText={
                                                //       (text) => {
                                                //           this.setState({ typedEmail: text });
                                                //       }
                                                // }
                                          ></TextInput>
                                          <TextInput style={styles.input}
                                                placeholder='Enter password'
                                                placeholderTextColor='rgba(255,255,255,0.8)'
                                                keyboardType='go'
                                                secureTextEntry
                                                autoCorrect={false}
                                                // ref={"txtPassword"}
                                                // onChangeText={
                                                //       (text) => {
                                                //           this.setState({ typedPassword: text });
                                                //       }
                                                //   }
                                          ></TextInput>
                                          <TouchableOpacity style={styles.buttonSignIn}
                                                // onPress={this.onAnonymousLogin}
                                                onPress={() => {
                                                      // console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
                                                      const { navigate} = this.props.navigation;
                                                      navigate(Register);
                                                      // this.onRegister;
                                                  }}
                                          >
                                                <Text style={styles.buttonText}> LOGIN </Text>
                                          </TouchableOpacity>
                                          {/* <TouchableOpacity style={styles.buttonSignUp}
                                                onPress={this.onRegister}
                                          >
                                                <Text style={styles.buttonText}> REGISTER </Text>
                                          </TouchableOpacity> */}
                                    </View>
                              </View>
                        </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
                  </SafeAreaView>
            )
      }
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'rgb(32, 53, 70)',
            flexDirection: 'column'
      },
      logoContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
      },
      logo: {
            width: 128,
            height: 56
      }, 
      title: {
            color: '#f7c744',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 5,
            opacity: 0.9
      },
      infoContainer: {
            // position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 300,
            padding: 20,
            // backgroundColor: 'red'
      },
      input: {
            height: 40,
            backgroundColor: 'rgba(255,255,255,0.2)',
            color:'#FFF',
            marginBottom: 20,
            paddingHorizontal: 10
      },
      buttonSignIn: {
             backgroundColor: 'rgb(255,135,56)',
            paddingVertical: 15,
            
      },
      buttonSignUp: {
            backgroundColor: 'rgb(255,135,56)',
            paddingVertical: 15,
            marginTop: 10
      },
      buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontSize: 18,
        fontWeight: 'bold' 
  }
    });