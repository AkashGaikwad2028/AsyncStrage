import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View,Text,StyleSheet, TextInput, TouchableNativeFeedback, TouchableOpacity} from "react-native"

export default function Login({navigation}) {

    const [email,setEmail]= useState("")
    const [Password,setPassword]= useState("")
    console.log("email",email)
    console.log("Password",Password)

    const SeveEmails=async ()=>{
        try{
            await AsyncStorage.setItem("Email",email)
            await AsyncStorage.setItem("Password",Password)
            navigation.navigate("Contact")
        }catch(e){
            console.log (e)
        }
    }

  return (
  <View style={styles.MainContainer}>
    <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold",color:"red",marginBottom:20,backgroundColor:"orange",width:200,marginHorizontal:90,padding:10,borderRadius:10}}>Login Page</Text>
   <TextInput
   style={styles.Textinput}
   placeholder="email"
   onChangeText={(text)=>{setEmail(text)}}
   />
     <TextInput
   style={styles.Textinput}
   placeholder="Password"
   onChangeText={(text)=>{setPassword(text)}}
   />
   <TouchableOpacity style={styles.Touchabel} onPress={SeveEmails}><Text style={styles.Text}>Log-In</Text></TouchableOpacity>
  </View>
  )
}


const styles= StyleSheet.create({

    MainContainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
    },

    Textinput:{
        borderWidth:2,
        borderRadius:50,
        borderColor:"black",
        marginHorizontal:10,
        marginBottom:10
    },
    Touchabel:{
        backgroundColor:"black",
        borderWidth:2,
        borderRadius:50,
        padding:15,
        marginHorizontal:10,
    },
    Text:{
        color:"white",
        fontSize:15,
        fontWeight:"bold",
       textAlign:"center"
    }

})