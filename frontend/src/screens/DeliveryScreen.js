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
        </View>

    )
}

export default DeliveryScreen;