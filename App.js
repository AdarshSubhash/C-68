
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Writescreen from './screens/write';
import Readscreen from './screens/read';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
}
}
const Tabnavigator=createBottomTabNavigator({
  write:{screen:Writescreen},
  read:{screen:Readscreen},
},
{
  defaultNavigationOptions:({navigation})=>({
tabBarIcon:({})=>{
  const routeName=navigation.state.routeName
if(routeName==='transaction'){
return(
<Image source={require('./assets/splash.png')}style={{width:50,height:30}}/>
  )

}
else if(routeName==='search'){
  return(
    <Image source={require('./assets/icon.png')}style={{width:50,height:30}}/>
      )
}
}

  })
}
);
const AppContainer=createAppContainer(
  Tabnavigator
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
