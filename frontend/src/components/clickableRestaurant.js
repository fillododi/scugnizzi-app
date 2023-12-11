import { homeScreenStyles } from "../styles";
import { Pressable, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setSelectedRestaurant } from "../store/selectedRestaurantSlice";


export function ClickableRestaurant({ navigation, img_path, location, nome_sede, distanza, next_screen }) {
    const dispatch = useDispatch()
    const handlePress = () => {
        dispatch(setSelectedRestaurant(nome_sede))
        navigation.navigate(next_screen)
    }
    return (
        <Pressable onPress={handlePress}>
            <View style={homeScreenStyles.clickableRestaurant}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                        borderRadius: 100,
                    }}
                    source={
                        img_path
                    }
                />
                <Text style={{ fontFamily: 'Thonburi' }}>{nome_sede} {location} {distanza}km</Text>
                <StatusBar style="auto" />
            </View>

        </Pressable>

    );
}