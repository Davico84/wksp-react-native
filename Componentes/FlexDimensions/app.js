import React from "react";
import { View } from "react-native";


const FlexDimensions = () => {
  return (
    <View style={{  flex:1}}>
        <View style={{flex:2, backgroundColor: 'powderblue'}}/>

        <View style={{flex:4,backgroundColor: 'skyblue'}}/>

        <View style={{flex:6,backgroundColor: 'steelblue'}}/>

    </View>
  )
}
export default FlexDimensions;