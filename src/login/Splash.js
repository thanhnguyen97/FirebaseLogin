import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { SignIn } from '../../Screens';

export default class Splash extends Component {
      constructor(props) { 
            super(props)
            this.state = { timer: 0}
            setInterval(()=> {
                  this.setState({ timer: this.state.timer + 1 })
            }, 1000)
      }
      static navigationOptions = ({ navigation }) => {
            const { params = {} } = navigation.state;
            let tabBarLabel = 'Welcome';   
            let tabBarIcon = () => (
            <Image
                  source={require('../../images/icon_welcome.png')}
                  style={{ width: 26, height: 26}}
            />
            );    
            return { tabBarLabel, tabBarIcon };
        }
      render() { 
            return (
                  <View style={styles.container}>
                        {/* <Text style={styles.title}>{ `Welcome to my App: ${this.state.timer}`}</Text>   */}
                        <View style={styles.logoContainer}>
                        <Text style={styles.title}>Welcome to EFE Technology</Text>
                              <Image style={ styles.logo}
                                    source={require('../../images/EFE_logo.png')}
                              ></Image>
                              <Text style={styles.titleLogo}>You trust, our success</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonSignIn}
                              // onPress={this.onLogin}
                              onPress={() => {
                                    console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
                                    const { navigate } = this.props.navigation;
                                    navigate(SignIn);
                                    }}
                        ></TouchableOpacity>
                  </View>
            )
      }
}
const styles = StyleSheet.create({
      container: {
          backgroundColor: 'rgb(32, 53, 70)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center' ,
      },
      title: {
          fontWeight: 'bold',
          fontSize: 24,
          color: 'orange',
          paddingVertical: 14
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
      titleLogo: {
            color: '#f7c744',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 5,
            opacity: 0.9
      }
  })