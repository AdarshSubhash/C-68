import React from 'react';
import { Text, View,TextInput } from 'react-native';

export default class Writescreen extends React.Component{
render(){
return(
<View style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}> 
    <Text>WriteYourOwnBedTimeStoryBelow</Text>
    <TextInput style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}placeholder="Write Here"/>
</View>


)
}



}