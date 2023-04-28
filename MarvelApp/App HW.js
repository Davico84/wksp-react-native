
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Views/Home/Home'
import Detail from './src/Components/Views/Detail/Detail'
import Form from './src/Components/Views/Form/Form';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Form" component={Form} /> 
        <Stack.Screen name="Detail" component={Detail} /> 
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}