import {View, Text, TextInput} from "react-native"
import Menu from "../components/Menu";
import NewButton from "../components/NewButton";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {createDeliveryOrder, setOrderTime, setOrderEmail, setOrderName, setOrderPhoneNumber, setOrderAddress} from '../store/orderSlice'

const DeliveryScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [userAddresses, setUserAddresses] = useState([])
    const [newAddress, setNewAddress] = useState({street: null, city: null})
    useEffect(()=>{
        dispatch(createDeliveryOrder())
    }, [])
    useEffect(()=>{
        if(userToken !== null){
            dispatch(setOrderEmail('prova@prova.it'))
            dispatch(setOrderName('Pippo Provino'))
            dispatch(setOrderPhoneNumber('3334567890'))
            setUserAddresses([{street: 'via marco rossi ', city: 'Mantova'}, {street: 'via giovanni bianchi', city: 'Buscoldo'}])
        }
    }, [userToken])
    const { selectedRestaurant: nome_sede } = useSelector(state => state.selectedRestaurant);
    const { time: selectedTime, name, email, phoneNumber} = useSelector(state => state.order)
    const { userToken } = useSelector(state => state.auth)


    return (
        <View>
            <Text>{nome_sede} - DELIVERY</Text>
            <Menu/>
            <TextInput placeholder="Inserisci l'orario" value={selectedTime} onChangeText={text=>dispatch(setOrderTime(text))}/>
            {!userToken?
                <View>
                    <TextInput placeholder="Inserisci il nome" value={name} onChangeText={()=>dispatch(setOrderName())}/>
                    <TextInput placeholder="Inserisci il telefono" value={phoneNumber} onChangeText={()=>dispatch(setOrderPhoneNumber())}/>
                    <TextInput placeholder="Inserisci la e-mail" value={email} onChangeText={()=>dispatch(setOrderEmail())}/>
                </View>
                :
                <View>
                    {userAddresses.map(address => <NewButton title={address.street + '-' + address.city} onPress={
                        ()=>dispatch(setOrderAddress(address))
                    }/>)}
                    <Text>Aggiungi un nuovo indirizzo</Text>
                    <TextInput placeholder="Inserisci la via" value={newAddress.street} onChangeText={(text)=> setNewAddress({...newAddress, street: text})}/>
                    <TextInput placeholder="Inserisci la città" value={newAddress.city} onChangeText={(text)=> setNewAddress({...newAddress, city: text})}/>
                    <NewButton title="Aggiungi indirizzo" onPress={()=>{dispatch(setOrderAddress(newAddress))}}/>
                </View>
            }
            <NewButton title="BACK" onPress={() => { navigation.navigate('RestaurantSelection', {nextScreen: "Delivery"}) }}/>
            <NewButton title="PAGA ORA" onPress={() => { navigation.navigate('ThanksForBooking') }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
            <NewButton title="PAGA A CASA" onPress={() => { navigation.navigate('ThanksForBooking') }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
        </View>

    )
}

export default DeliveryScreen;