import {Button, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from "../styles";

const OtherScreen = ({navigation}) => {
    return <View style={styles.container}>
            <Button title="BACK" onPress={()=> navigation.navigate('Home')}/>
            <StatusBar style="auto" />
        </View>
}

export default OtherScreen