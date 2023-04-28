import * as React from 'react';
import { StyleSheet,Text, View,  Image } from 'react-native';

// export default function Information({image, name}) {
  export default function Information() {
  return (
    <View style={styles.container}>
			{/* <Image 
				style={styles.image}
				source={image}
			/> */}
      <Text style={styles.font}>Vista de Information</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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