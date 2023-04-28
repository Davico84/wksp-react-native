import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';


import VideoCard from '../VideoCard/VideoCard';

export default function Home() {
  return (
    <View  style={styles.container}>
        {/* <VideoCard  {...props}
            image={require('../../../../assets/favicon.png')} 
            name='Iron Man' />
        <VideoCard  {...props}
             image={require('../../../../assets/favicon.png')}
             name='Captain America' /> */}

        <VideoCard 
            image={require('../../../../assets/favicon.png')} 
            name='Groot' />
        <VideoCard 
             image={require('../../../../assets/favicon.png')}
             name='OldWidow' />
  </View>
  );
}
{/* <p align="center">
  <img src="./screens/1.jpeg" style="width: 30%"/>
</p> */}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"orange",
        display: 'flex',
        height: '100%',
        width: '100%',
    //   marginTop: 0,
    
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    image: {
        borderRadius: 8,
    }
  });