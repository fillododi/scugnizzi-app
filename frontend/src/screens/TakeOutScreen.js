import {View, Text, TextInput} from "react-native";
import Menu from "../components/Menu";
import NewButton from "../components/NewButton";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {createTakeoutOrder, setOrderTime} from '../store/orderSlice'
import {setBookingEmail, setBookingName, setBookingPhoneNumber} from "../store/bookingSlice";

const TakeOut = ({ navigation }) => {
    const { time: selectedTime, name, phoneNumber, email } = useSelector(state => state.order)
    const { userToken } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(createTakeoutOrder())
    }, [])
    return (
        <View style={{ height: '100%' }}>
            <Text>Take Out, da modificare, la selezione orario va messa in un altra pagina</Text>
            <Menu />
            <NewButton title="BACK" onPress={() => { navigation.navigate('RestaurantSelection', {nextScreen: "TakeOut"}) }}
                style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
            <TextInput placeholder="Inserisci l'orario" value={selectedTime} onChangeText={()=>dispatch(setOrderTime())}/>
            {!userToken && <View>
                <TextInput placeholder="Inserisci il nome" value={name} onChangeText={()=>dispatch(setBookingName())}/>
                <TextInput placeholder="Inserisci il telefono" value={phoneNumber} onChangeText={()=>dispatch(setBookingPhoneNumber())}/>
                <TextInput placeholder="Inserisci la e-mail" value={email} onChangeText={()=>dispatch(setBookingEmail())}/>
            </View>}
            <NewButton title="PAGA ORA" onPress={() => { navigation.navigate('ThanksForBooking') }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
            <NewButton title="PAGA IN CASSA" onPress={() => { navigation.navigate('ThanksForBooking') }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
        </View>
    );
}

export default TakeOut;