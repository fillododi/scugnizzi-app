import { homeScreenStyles } from "../styles";
import { Pressable, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";


export function ClickableRestaurant({ navigation, img_path, location, nome_sede, distanza }) {
    return (
        <Pressable onPress={() => navigation.navigate('Restaurant', { name: nome_sede })}>
            <View style={homeScreenStyles.clickableRestaurant}>
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
                <Text>{location} {distanza}km</Text>
                <StatusBar style="auto" />
            </View>

        </Pressable>

    );
}