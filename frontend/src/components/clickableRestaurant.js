import styles from "../styles";
import { Pressable, View, Image, Button } from "react-native";
import { StatusBar } from "expo-status-bar";


export function ClickabgeRestaurant({ img_path, location }) {
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