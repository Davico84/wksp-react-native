import React, {useState} from 'react';
import {Text,View,TextInput,Image} from 'react-native';

export default function App() {

const [text,setText]=useState('');

  return (
    <View>
        <Image source={require('./assets/favicon.png')}/>
              <TextInput
                  placeholder="Presionar para capitarlizar"
                  onChangeText={text=>setText(text)}
                  defaultValue={text}
              />      
          
        <Text>
          {text.toUpperCase()}
        </Text>
    </View>
  );
}

