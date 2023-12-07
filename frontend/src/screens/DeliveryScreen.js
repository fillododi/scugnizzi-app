import { View, Text } from "react-native"
import Menu from "../components/Menu";
import NewButton from "../components/NewButton";
import TimePicker from "../components/TimePicker";
import {useEffect} from "react";
import {useDispatch} from 'react-redux'
import {createDeliveryOrder} from '../store/orderSlice'

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
            <TimePicker navigation={navigation} nome_sede={nome_sede} now={new Date()} />
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