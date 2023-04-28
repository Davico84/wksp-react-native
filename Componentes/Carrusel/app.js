
import * as React from 'react';
import {View,Text,StyleSheet, FlatList,Image,Dimensions,SafeAreaView,Animated} from 'react-native'
import { NavigationContainer ,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import Home from './src/Components/Views/Home/Home'
import Detail from './src/Components/Views/Detail/Detail'
import Form from './src/Components/Views/Form/Form';
import {LinearGradient} from "expo-linear-gradient";
//npm i expo-linear-gradient
import { videogames } from './src/dataVideojuegos';

const Stack = createNativeStackNavigator();
const width= Dimensions.get("window").width;
const height= Dimensions.get("window").height;
const contenedor= width* .7;
const espacio=10;
const espacio_lateral=(width-contenedor)/2;
const imagenes=[];
const altura_backDrop= height* 0.5;

function BackDrop({scrollX}){

  return (
    <View style={([{height:altura_backDrop,
                width,
                position: "absolute", top:0}],
                StyleSheet.absoluteFillObject)  
              }
    >
      {imagenes.map((imagen,index)=>{
        const inputRange=[
          (index - 1) * contenedor,
          index * contenedor,
          (index + 1) * contenedor,
        ];
       
        const outputRange=[0,1,0];
        const  opacity= scrollX.interpolate({
          inputRange,
          outputRange,
        });
        return(
            <Animated.Image source={{uri: imagen.image}} 
                      key={index}
                      blurRadius={1}//esto le quita nitidez a la imagen de fondo
                      style={[{
                        height:altura_backDrop,
                        width,
                        position: "absolute",
                        top:0,//estaba en cero
                        opacity,
                        borderColor: 'white',
                        
                      }]}
            />
        )})
      }
      <LinearGradient 
        colors={["transparent", "white"]}
        style={{height: altura_backDrop,width,
                position:"absolute", top:0}}
      />
    </View>    
)}

export default function App() {
  const scrollX= React.useRef(new Animated.Value(0)).current;
  
  for (let index = 0; index < 5; index++) {
    imagenes.push(videogames[index]);
    
  }
  return (
    <SafeAreaView style={styles.container}>
     <BackDrop scrollX={scrollX}/>

      <Animated.FlatList 
        onScroll={Animated.event(
          [{nativeEvent: { contentOffset:{x:scrollX }}}],
          {useNativeDriver :true}
        )}
        data={imagenes.map( (el)=> {
        // console.log("estes es el map de imagenes",el.image)
            return (
              {
                key: `${el.nombre}`, 
                img: el.image, 
              }
            )})
            }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingTop:200,
            paddingHorizontal:espacio_lateral,
                              }} 
        decelerationRate={0}
        snapToInterval={contenedor} 
        scrollEventThrottle={16}
        // keyExtractor={(item)=>item}
        renderItem={({item,index})=>{
         
          const inputRange=[
            (index - 1) * contenedor,
            index * contenedor,
            (index + 1) * contenedor,
          ];
         
          const outputRange=[0,-50,0];
          const  translateY= scrollX.interpolate({
            inputRange,
            outputRange,
          });
          
          return( 
            <View style={{width: contenedor}}>
              <Animated.View style={{
                marginHorizontal: espacio,
                borderRadius:34,
                backgroundColor: "#fff",
                alignItems: "center",
                transform: [{translateY}]
                }}>
                <Image source={{uri:item.img}} 
                        style={styles.posterImage}
                        />
                <Text style={styles.name}>{item.key}</Text>
               </Animated.View> 
            </View> 
            )
        }}
      
      />

    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImage:{
    width: '100%',
    height: contenedor*1.2,
    position: 'relative',
    resizeMode: "cover",
    margin:0,
    borderRadius: 24,
    marginBottom:10
    
  },
  name:{
    color:'red'
  }
});