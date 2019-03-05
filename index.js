import React, { Component } from 'react'
import {AppRegistry} from 'react-native'
import Splash from './src/login/Splash'
import App from './src/App'

class Main extends Component { 
    constructor(props) {
          super(props);
          this.state={ currentScreen: 'Splash' };
                console.log('start doing some tasks for about 3 seconds')
          setTimeout(()=> {
                console.log('Done some tasks for about 3 seconds')
                this.setState({ currentScreen: 'App'})
          }, 3000)
    }
    render() { 
        const { currentScreen } = this.state
            let mainScreen = currentScreen === 'Splash' ? <Splash/> : <App/>
        return mainScreen
    }
}

AppRegistry.registerComponent('FirebaseLogin', () => Main);