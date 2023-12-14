import { View, Text, Image } from "react-native";
import { restaurantScreenStyles } from "../styles";
import NewButton from "../components/NewButton";
import { useSelector } from "react-redux";
import { pizza_home, logo_img } from "../images";
import Strip from "../components/Strip";


const HomeScreen = ({ navigation }) => {
    const { userToken } = useSelector(state => state.auth)
    return <View style={restaurantScreenStyles.restaurantscreen}>

        <Image source={pizza_home} style={{
            width: '100%',
            height: '25%',
            zIndex: 0,

        }} />

        <Image source={logo_img} style={{
            borderRadius: 100,
            backgroundColor: '#fff',
            borderWidth: 3,
            borderColor: '#000',
            resizeMode: 'contain',
            //width: (2 * 100 / 9).toString() + '%',
            height: '10%',
            aspectRatio: 1,
            position: 'absolute',
            top: ((100 / 8) - 5).toString() + '%',
            zIndex: 1,
        }} />
        <View style={{
            height: '75%',
            width: '100%',
            position: 'relative',
            top: '-3.33%',
        }}>

            <Strip text="PIZZERIA SCUGNIZZI" ridge='0' />

            <View style={{
                height: '94.5%', width: '100%',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-evenly', alignItems: 'center',

            }}>
                <NewButton title="Prenota un tavolo" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Booking' })} style={restaurantScreenStyles.bookingButton} />
                <NewButton title="Asporto" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'TakeOut' })} style={restaurantScreenStyles.bookingButton} />
                <NewButton title="Consegna a domicilio" onPress={() => navigation.navigate('RestaurantSelection', { nextScreen: 'Delivery' })} style={restaurantScreenStyles.bookingButton} />
                {userToken && <NewButton title="Gestisci Prenotazioni" onPress={() => navigation.navigate('Orders')} style={restaurantScreenStyles.bookingButton} />}
            </View>
        </View>
    </View >
}

export default HomeScreen;