import {View, Text} from "react-native";
import { restaurantScreenStyles } from "../styles";
import NewButton from "../components/NewButton";
import {useSelector} from "react-redux";


const HomeScreen = ({navigation}) => {
    const {userToken} = useSelector(state => state.auth)
    return <View style={restaurantScreenStyles.restaurantscreen}>
        <Text style={restaurantScreenStyles.textHeader}>{name}</Text>
        <NewButton title="PRENOTA" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Booking' })} style={restaurantScreenStyles.bookingButton} />
        <NewButton title="ASPORTO" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'TakeOut' })} style={restaurantScreenStyles.bookingButton} />
        <NewButton title="DOMICILIO" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Delivery' })} style={restaurantScreenStyles.bookingButton} />
        {userToken && <NewButton title="Gestisci Prenotazioni" onPress={()=>navigation.navigate('Orders')} style={restaurantScreenStyles.bookingButton}/>}
    </View >
}

export default HomeScreen;