import {Button, Pressable, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from "../styles";
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.container}>
                <Button title="BOTTONE 1" onPress={()=> navigation.navigate('Other')}/>
            </Pressable>
            <Pressable style={styles.container}>
                <Button title="BOTTONE 2" onPress={()=> navigation.navigate('Other')}/>
            </Pressable>
            <Pressable style={styles.container}>
                <Button title="BOTTONE 3" onPress={()=> navigation.navigate('Other')}/>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen