import { View,Text,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Routes} from  './src/routes/index';

export default function App(){
  return(
    <NavigationContainer>
          <Routes/>
    </NavigationContainer>

  )
}

const styles  = StyleSheet.create({
  constainer :{
   
    height:400
  },
  title :{
    fontSize:24,
    marginTop:100
  }
})

function Nome({nome}){
  return (
    <Text>Ola {nome}</Text>
  )
}