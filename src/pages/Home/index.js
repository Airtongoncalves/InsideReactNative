import { View,Text,StyleSheet,SafeAreaView ,TextInput,TouchableOpacity} from "react-native";
import {Logo} from '../../components/logo';
import { useState } from "react";
import {Ionicons} from '@expo/vector-icons';
export function Home (){

    const [inputValue,setInputValue] = useState("");

    function handleSearch(){
        console.log("cliquei");
        console.log(inputValue);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Logo/>
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Digite o nome da comida..."
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity
                    onPress={handleSearch}
                >
                    <Ionicons name="search" size={28} color="#4cbe6c"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
            flex:1,
            backgroundColor:'#F3F9FF',
            paddingTop:36,
            paddingStart:14,
            paddingEnd:14
    },
    title:{
        fontSize:26,
        fontWeight:'bold',
        color:"#0e0e0e"
    },
    input:{
        width:'90%',
        maxWidth:'90%',
        height:54
    },
    form:{
 
        width:'100%',
        borderRadius: 8,
        marginTop:16,
        marginBottom:16,
        borderWidth:1,
        borderColor:'#ECECEC',
        paddingLeft:8,
        paddingRight:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'


    }
})