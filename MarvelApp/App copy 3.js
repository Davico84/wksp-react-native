
import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { NavigationContainer ,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import Home from './src/Components/Views/Home/Home'
import Detail from './src/Components/Views/Detail/Detail'
import Form from './src/Components/Views/Form/Form';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Landing</Text>
      
    </View>
    // <NavigationContainer>
      
    //   <Stack.Navigator>

    //     <Stack.Screen 
    //           name="Home" 
    //           component={Home} 
    //           options={{
                
    //             title: 'Home',
    //             headerStyle:{
    //               backgroundColor: '#000000',
    //             },
    //             headerTitleAlign:'center',
    //             headerTintColor : '#fff',
    //             headerTitleStyle:{
    //               fontWeight: 'bold',
    //             }

    //           }
    //         }/>
        
    //     <Stack.Screen 
    //           name="Form" 
    //           component={Form} 
    //           options={{
    //             title: 'Form',
    //             headerStyle:{
    //               backgroundColor: '#000000',
    //             },
    //             headerTitleAlign:'center',
    //             headerTintColor : '#fff',
    //             headerTitleStyle:{
    //               fontWeight: 'bold',
    //             }

    //           }
    //         }/> 
    //     <Stack.Screen 
    //           name="Detail" 
    //           component={Detail} 
    //           options={{
    //             title: 'Detail',
    //             headerStyle:{
    //               backgroundColor: '#000000',
    //             },
    //             headerTitleAlign:'center',
    //             headerTintColor : '#fff',
    //             headerTitleStyle:{
    //               fontWeight: 'bold',
    //             }

    //           }
    //         }/>
        
    //   </Stack.Navigator>

    // </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:20
  },
});