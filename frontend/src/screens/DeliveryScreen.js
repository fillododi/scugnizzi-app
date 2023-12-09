import {View, Text, TextInput} from "react-native"
import Menu from "../components/Menu";
import NewButton from "../components/NewButton";
import {useEffect} from "react";
import {useDispatch} from 'react-redux'
import {createDeliveryOrder} from '../store/orderSlice'
import {setBookingTime} from "../store/bookingSlice";

const DeliveryScreen = ({route, navigation}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(createDeliveryOrder())
    }, [])
    const { nome_sede } = route.params;
    return (
        <View>
            <Text>{nome_sede} - DELIVERY</Text>
            <Menu/>
            <TextInput placeholder="Inserisci l'orario" value={selectedTime} onChangeText={()=>dispatch(setBookingTime())}/>
            <NewButton title="BACK" onPress={() => { navigation.navigate('RestaurantSelection', {nextScreen: "Delivery"}) }}/>
            <NewButton title="PAGA ORA" onPress={() => { navigation.navigate('ThanksForBooking', {where: nome_sede}) }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
            <NewButton title="PAGA A CASA" onPress={() => { navigation.navigate('ThanksForBooking', {where: nome_sede}) }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
        </View>

    )
}

export default DeliveryScreen;