import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Modal } from 'react-native-modal';
import { styles } from './styles';



export function HomeScreen({navigation}) {
    return (
  
      <View style={styles.container}>
  
        <Pressable>
          <View style={styles.container}>
            <Image source={require('../FOTO TMP 1/DSC07566.jpg')}/>
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
  