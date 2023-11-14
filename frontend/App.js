import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Modal } from 'react-native-modal';
import { HomeScreen } from './assets/homescreen';
import { styles } from './assets/styles';

const OtherScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="BACK" onPress={()=> navigation.navigate('Home')}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <NavigationContainer>    

        <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={HomeScreen} 
        options={{title:'HomePage'}}/>


        <Stack.Screen name="Other" component={OtherScreen} options={{title:'OtherPage'}} />

        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();




