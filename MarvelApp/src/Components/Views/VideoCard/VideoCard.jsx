import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet,Text, View,  Image, TouchableOpacity } from 'react-native';

//opcion 1
// export default function VideoCard({image, name,navigation}) {
//   return (
//     <TouchableOpacity 
//         style={styles.container}
//         onPress={()=>navigation.navigate('Detail')}
//      >
// 			<Image 
// 				style={styles.image}
// 				source={image}
// 			/>
//       <Text style={styles.font}>{name}</Text>
//     </TouchableOpacity>
//   );
// }
//opcion 2
export default function VideoCard({image, name}) {
    const navigation=useNavigation();
    return (
      <TouchableOpacity 
          style={styles.container}
          onPress={()=>navigation.navigate('Detail')}
       >
              <Image 
                  style={styles.image}
                  source={image}
              />
        <Text style={styles.font}>{name}</Text>
      </TouchableOpacity>
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