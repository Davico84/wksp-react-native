import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from '../Information/Information'
import Comics from '../Comics/Comics';
const Tab = createBottomTabNavigator();


export default function Detail() {
  return (
    <Tab.Navigator
      initialRouteName="Information"
      tabBarOptions={{
        activeTintColor: 'darkred'
      }}
    >
      <Tab.Screen 
        name="Information" 
        component={Information} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-circle" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Comics" 
        component={Comics} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

<p align="center">
  <img src="./screens/2.jpeg" style="width: 30%"/>
</p>