import { Button, View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { restaurantScreenStyles } from "../styles";
import NewButton from "../components/NewButton";


const RestaurantScreen = ({ route, navigation }) => {
    const { name } = route.params;
    return <View style={restaurantScreenStyles.restaurantscreen}>
        <Text style={restaurantScreenStyles.textHeader}>{name}</Text>
        <NewButton title="PRENOTA" onPress={() => navigation.navigate('Booking', { nome_sede: name })} style={restaurantScreenStyles.bookingButton} />


        <NewButton title="ASPORTO" onPress={() => navigation.navigate('TakeOut')} style={restaurantScreenStyles.bookingButton} />
        <NewButton title="DOMICILIO" onPress={() => navigation.navigate('Home')} style={restaurantScreenStyles.bookingButton} />
        <NewButton title="HOME" onPress={() => navigation.navigate('Home')} style={restaurantScreenStyles.bookingButton} />
        <StatusBar style="auto" />
    </View >
}

export default RestaurantScreen;