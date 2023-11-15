import { Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";

const RestaurantScreen = ({ route, navigation }) => {
    const { loc } = route.params;
    return <View style={styles.container}>
        <Text>{loc}</Text>
        <Button title="BACK" onPress={() => navigation.navigate('Home')} />
        <StatusBar style="auto" />
    </View>
}

export default RestaurantScreen;