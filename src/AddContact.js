import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import {View,Text, TextInput,StyleSheet,TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native'

export default function AddContact() {

    const navigation =useNavigation()
    let contacts=[]
    const [name,setName]=useState("")
    const [Mobile,setmobile]=useState("")

    console.log("contacts=========",contacts)

    const saveContacts =async()=>{
        let tempcotact=[]
        contacts.push({name:name,mobile:Mobile})
         let x = JSON.parse (await AsyncStorage.getItem('CONTACTS')) 
         tempcotact = x;
        tempcotact.map((item)=>{
            contacts.push (item)
        })
        await AsyncStorage.setItem('CONTACTS',JSON.stringify(contacts))
        navigation.goBack()
    }

  return (
  <View style={{flex:1,flexDirection:"column",justifyContent:"center"}}>
   <TextInput
   placeholder='Addemail'
   value={name}
   style={styles.Textinput}
onChangeText={(text)=>setName(text)}
   />
    <TextInput
   placeholder='Addemail'
   value={Mobile}
   style={styles.Textinput}
   onChangeText={(text)=>setmobile(text)}
   />

<TouchableOpacity style={styles.Touchabel} onPress={()=>{saveContacts()}}><Text style={styles.Text}>Add contact</Text></TouchableOpacity>
  </View>
  )
}

const styles=StyleSheet.create({
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
