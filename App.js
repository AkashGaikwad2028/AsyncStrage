import React from 'react'
import {View,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Asyncstorage/src/Login'
import Intro from './src/Intro'
import Contact from './src/Contact'
import AddContact from './src/AddContact'


const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name ="Intro" component={Intro} options={{headerShown:false}}/>
        <Stack.Screen name ="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name ="Contact" component={Contact}  options={{headerShown:false}}/>
        <Stack.Screen name ="AddContact" component={AddContact}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}
