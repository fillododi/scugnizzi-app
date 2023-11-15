import styles from "../styles";
import { Pressable, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";


export function ClickableRestaurant({ navigation, img_path, location }) {
    return (
        <Pressable onPress={() => navigation.navigate('Restaurant', { loc: location })}>
            <View style={styles.clickableRestaurant}>
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
                <Text>{location}</Text>
                <StatusBar style="auto" />
            </View>

        </Pressable>

    );
}