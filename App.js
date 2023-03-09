import React, { useState } from "react";
import { View,Text, Button,StyleSheet,StatusBar, Pressable,Image, TouchableOpacity} from "react-native";


const App = () =>{
    let [value,setValue]=useState(0)
    let increementValue =()=>{
        setValue(value+1)
    }
    let decreaseValue =()=>{
        if (value === 0){
            setValue(0)
        }else{
            setValue(value-1)
        }
    }
    let reset =()=>{
        setValue(0)
    }
    return(

        <View style={styles.container}>
            <StatusBar
                backgroundColor="white"
                barStyle={'dark-content'}
            />
            <Text style={styles.text}>
                Counter 
            </Text>
            <Text style={styles.text}>
                {value} 
            </Text>

            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Pressable
                        style = {({pressed})=>[{backgroundColor:pressed ?'#EEEEEE':'#BAD7E9',},styles.button,]}
                        onPress={increementValue}
                    >
                        <Text style={styles.text}> + </Text>
                    </Pressable>
                </View>

                <View style={styles.buttonView}>
                    <Pressable
                        style = {({pressed})=>[{backgroundColor:pressed ?'#EEEEEE':'#F48484',},styles.button,]}
                        onPress={decreaseValue}
                    >
                        <Text style={styles.text}> - </Text>
                    </Pressable>
                </View>
            </View>
            <TouchableOpacity
                onPress={reset}
            >
                <Text style={{fontSize:18,margin:20}}>RESET</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'black',
        fontSize:60
    },
    buttonContainer:{
        flexDirection:'row',
    },
    buttonView:{
        width:100,
        margin:20,
        flex:1,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        height:80,
        borderRadius: 10,
    },
})
export default App;