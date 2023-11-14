import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './styles';



export function HomeScreen({ navigation }) {
  return (

    <View style={styles.container}>

      <RestaurantSlot img_path={require('../img1/DSC07566.jpg')} location="LOCATION 1" />

      <RestaurantSlot img_path={require('../img1/DSC07566.jpg')} location="LOCATION 2" />

      <RestaurantSlot img_path={require('../img1/DSC07566.jpg')} location="LOCATION 3" />

    </View>
  );
}


function RestaurantSlot({ img_path, location }) {
  return (
    <Pressable>
      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={
            img_path
          }
        />
        <Button title={location} onPress={() => navigation.navigate('Other')} />
        <StatusBar style="auto" />
      </View>

    </Pressable>

  );
}