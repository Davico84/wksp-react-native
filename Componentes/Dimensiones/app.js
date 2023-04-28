import React from "react";
import { View } from "react-native";


const FixedDimensions = () => {
  return (
    <View>
        <View style={{width:150 ,height:150, backgroundColor: 'powderblue'}}/>

        <View style={{width:250 ,height:250,backgroundColor: 'skyblue'}}/>

        <View style={{width:350  ,height:350,backgroundColor: 'steelblue'}}/>

    </View>
  )
}
export default FixedDimensions;