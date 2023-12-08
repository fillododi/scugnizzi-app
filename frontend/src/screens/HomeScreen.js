import { View, Text, Image } from "react-native";
import { restaurantScreenStyles } from "../styles";
import NewButton from "../components/NewButton";
import { useSelector } from "react-redux";
import { margherita_bg } from "../images";
import Strip from "../components/Strip";


const HomeScreen = ({ navigation }) => {
    const { userToken } = useSelector(state => state.auth)
    return <View style={restaurantScreenStyles.restaurantscreen}>

        <Image source={margherita_bg} style={{
            windth: '100%',
            height: '25%',
            left: -250,
        }} />
        <View style={{
            height: '75%',
            width: '100%',
            position: 'relative',
            top: '-3.33%',
        }}>

            <Strip text="COSA VUOI FARE?" />

            <View style={{
                height: '94.5%', width: '100%',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-evenly', alignItems: 'center',

            }}>
                <NewButton title="PRENOTA" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Booking' })} style={restaurantScreenStyles.bookingButton} />
                <NewButton title="ASPORTO" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'TakeOut' })} style={restaurantScreenStyles.bookingButton} />
                <NewButton title="DOMICILIO" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Delivery' })} style={restaurantScreenStyles.bookingButton} />
                {userToken && <NewButton title="Gestisci Prenotazioni" onPress={() => navigation.navigate('Orders')} style={restaurantScreenStyles.bookingButton} />}
            </View>
        </View>
    </View >
}

export default HomeScreen;