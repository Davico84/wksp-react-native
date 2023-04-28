import React from "react";
import { View } from "react-native";


const PercentDimensions = () => {
  return (
    <View style={{  height:'100%', width:'100%'}}>
        <View style={{
          height:'10%', backgroundColor: 'powderblue'}}/>

        <View style={{
          width: '60%' ,height:'80%',backgroundColor: 'skyblue'}}/>

        <View style={{
          width: '100%',height:'10%',backgroundColor: 'steelblue'}}/>

    </View>
  )
}
export default PercentDimensions;