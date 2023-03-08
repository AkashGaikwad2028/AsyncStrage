import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import {View,Text, ImageBackground} from "react-native"
import { useNavigation } from '@react-navigation/native'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from './Login'

export default function Intro() {
    const navigation= useNavigation()
useEffect(()=>{
    setTimeout(()=>{
        CheckLogin()
    },3000)
},[])

const CheckLogin= async()=>{
    const email = await AsyncStorage.getItem("Email")
    const Password = await AsyncStorage.getItem("Password")
    console.log("email-intro",email)
    console.log("Password-intro",Password)
    if (email !==null){
     navigation.navigate('Contact')
    }
    else if (email == null){
        navigation.navigate("Login")
    }
}


  return (
    <View style={{flex:1}}>
<ImageBackground source={require("../src/Image/dice.jpg")} style={{flex:1}}/>
<Text style={{color:"white",backfaceVisibility:"visible",position:"absolute",bottom:80,left:80,fontSize:35}}>Welcome Back</Text>
    </View>
  )
}
