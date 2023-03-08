import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import {View,Text,StyleSheet} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { useIsFocused, useNavigation } from '@react-navigation/native'

export default function Contact() {

  const navigation =useNavigation()
  const IsFocused =useIsFocused()
  const [ContactList,setContactList]=useState([])

  useEffect(()=>{
    getData()
  },[IsFocused])

  console.log ("ContactList===========",ContactList)

  const getData=async()=>{
    try{
        const contactsS =await AsyncStorage.getItem("CONTACTS")
        const tempContact1 =JSON.parse(contactsS)
setContactList(tempContact1)
        console.log("tempContact",tempContact1)
    }catch (e){
        console.log(e)
    }
    
}

const Logout=async()=>{
 await AsyncStorage.setItem("Email","")
 await AsyncStorage.setItem("Password","")
 navigation.navigate("Login")
}

const navigatetoAdd=()=>{
  navigation.navigate("AddContact")
}

  return (
  <View style={{ flex:1,flexDirection:"column",justifyContent:"space-around"}}>
    <View>
    <Text style={{textAlign:"center", fontSize:18, color:"black",marginBottom:10,fontWeight:"bold"}}>CONTACT</Text>
    <FlatList
     data={ContactList}
     renderItem={(item,index)=>{
      return(
        <View style={{borderWidth:2,padding:10,flexDirection:"row",justifyContent:"space-between",marginBottom:10,marginHorizontal:10,borderRadius:10,borderColor:'red'}}>
        <View style={{padding:10,flexDirection:"row"}}>
          <Text style={{color:"black",marginRight:10,fontSize:16}}>Name:</Text>
          <Text style={{color:"black",marginRight:10,fontSize:16}}>{item.item.name}</Text>
        </View>
        <View style={{padding:10,flexDirection:"row"}}>
          <Text style={{color:"black",marginRight:10,fontSize:16}}>mobile:</Text>
          <Text style={{color:"black",marginRight:10,fontSize:16}}>{item.item.mobile}</Text>
        </View>
        </View>
      )
     }}
    />
    </View>
    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
    <TouchableOpacity style={styles.Touchabel}><Text style={ styles.Text} onPress={()=>Logout()}>Log-Out</Text></TouchableOpacity>
    <TouchableOpacity  style={styles.Touchabel}><Text  style={styles.Text} onPress={navigatetoAdd}>Add To Contact</Text></TouchableOpacity>
    </View>
    </View>

  )
}


const styles= StyleSheet.create({

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
