import { Button, View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { restaurantScreenStyles } from "../styles";


const RestaurantScreen = ({ route, navigation }) => {
    const { name } = route.params;
    return <View style={restaurantScreenStyles.restaurantscreen}>
        <Text style={restaurantScreenStyles.textHeader}>{name}</Text>
        <Pressable onPress={() => navigation.navigate('Booking', { nome_sede: name })} style={restaurantScreenStyles.bookingButton}>
            <Text style={restaurantScreenStyles.buttonText}>Prenota</Text>
        </Pressable>
        <Button title="ASPORTO" onPress={() => navigation.navigate('Home')} style={restaurantScreenStyles.bookingButton} />
        <Button title="DOMICILIO" onPress={() => navigation.navigate('Home')} style={restaurantScreenStyles.bookingButton} />
        <Button title="HOME" onPress={() => navigation.navigate('Home')} style={restaurantScreenStyles.bookingButton} />
        <StatusBar style="auto" />
    </View >
}

export default RestaurantScreen;