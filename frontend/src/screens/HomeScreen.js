import {View, Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import { restaurantScreenStyles } from "../styles";
import NewButton from "../components/NewButton";


const HomeScreen = ({navigation}) => {
    return <View style={restaurantScreenStyles.restaurantscreen}>
        <Text style={restaurantScreenStyles.textHeader}>{name}</Text>
        <NewButton title="PRENOTA" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Booking' })} style={restaurantScreenStyles.bookingButton} />
        <NewButton title="ASPORTO" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'TakeOut' })} style={restaurantScreenStyles.bookingButton} />
        <NewButton title="DOMICILIO" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Delivery' })} style={restaurantScreenStyles.bookingButton} />
        <StatusBar style="auto" />
    </View >
}

export default HomeScreen;