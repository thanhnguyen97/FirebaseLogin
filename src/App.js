import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Login from './login/Login'
import Register from './login/Register'
import { SignUp, SignIn } from '../Screens'

let routeConfigs = createBottomTabNavigator({
      SignIn: {
            screen: Login,
      },
      SignUp: {
          screen: Register,
      },
  });
let tabBarOptions  = {    
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
      tabBarOptions: {
          activeTintColor: 'blue',
          labelStyle: {
              fontSize: 13,
          },
          style: {
              backgroundColor: 'lightgray',
              padding: -10
          },           
      },    
      order: [ SignIn, SignUp  ],
  };
let App = createAppContainer(routeConfigs, tabBarOptions);

export default App;  

