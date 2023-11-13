import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Modal} from 'react-native-modal';


const HomeScreen = ({navigation}) => {
  return (

    <View style={styles.container}>

      <Pressable>
        <View style={styles.container}>
          <Button title="BOTTONE 1" onPress={()=> navigation.navigate('Other')}/>
          <StatusBar style="auto" />
        </View>

      </Pressable>

      <Pressable>

      <View style={styles.container}>
        <Button title="BOTTONE 2" onPress={()=> navigation.navigate('Other')}/>
        <StatusBar style="auto" />
      </View>

      </Pressable>

      <Pressable>

      <View style={styles.container}>
        <Button title="BOTTONE 3" onPress={()=> navigation.navigate('Other')}/>
        <StatusBar style="auto" />
      </View>

      </Pressable>
    </View>
  );
}

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
      {/*<Modal animationIn='slideInLeft' animationOut='slideOutRight' 
      isVisible={modalVisible} animationInTiming={300} animationOutTiming={300}>
      <Text>TEST MODALE</Text>
  </Modal>*/}

      

        
    



        <Stack.Navigator initialRouteName='Home' screenOptions={
          {presentation:'modal'}
        }>

        <Stack.Screen name="Home" component={HomeScreen} 
        options={{title:''}}
        />


        <Stack.Screen name="Other" component={OtherScreen} />

        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },

  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 1000,
  },

});



