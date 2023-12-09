import {TextInput, View} from "react-native";
import { Calendar } from "react-native-calendars";
import {useEffect} from "react";
import NewButton from "../components/NewButton";
import {useDispatch, useSelector} from 'react-redux'
import {setBookingDay, setPeopleAmount, setBookingEmail, setBookingName, setBookingTime, setBookingPhoneNumber} from '../store/bookingSlice'


const BookingScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    let now = new Date();
    const { day: selectedDay, peopleAmount, time: selectedTime, name, phoneNumber, email} = useSelector(state => state.booking)
    const { userToken } = useSelector(state => state.auth)
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // Gennaio è 0
    let yyyy = now.getFullYear();
    let today = yyyy + '-' + mm + '-' + dd;
    useEffect(()=>{
        if(userToken !== null){
            dispatch(setBookingEmail('prova@prova.it'))
            dispatch(setBookingName('Pippo Provino'))
            dispatch(setBookingPhoneNumber('3334567890'))
        }
    }, [userToken])
    return (
        <View style={
            {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#F6C066',
                height: '100%',
                flex: 1,
            }
        }>
            <Calendar
                onDayPress={day => { selectedDay === day.dateString ? dispatch(setBookingDay(null)) : dispatch(setBookingDay(day.dateString)); }}
                markedDates={{ [selectedDay]: { selected: true, selectedColor: '#F0A54C' } }}
                minDate={today}
            />
            {(selectedDay !== null) ?
                <View>
                    <TextInput placeholder="Inserisci l'orario" value={selectedTime} onChangeText={()=>dispatch(setBookingTime())}/>
                    <TextInput placeholder="In quanti siete?" value={peopleAmount} onChangeText={()=>dispatch(setPeopleAmount())}/>
                    {!userToken && <View>
                        <TextInput placeholder="Inserisci il nome" value={name} onChangeText={()=>dispatch(setBookingName())}/>
                        <TextInput placeholder="Inserisci il telefono" value={phoneNumber} onChangeText={()=>dispatch(setBookingPhoneNumber())}/>
                        <TextInput placeholder="Inserisci la e-mail" value={email} onChangeText={()=>dispatch(setBookingEmail())}/>
                    </View>}
                    <NewButton title="PRENOTA" onPress={()=>navigation.navigate('ThanksForBooking')}/>
                </View>
                :
                <View style={{
                    backgroundColor: '#F6C066',
                    height: '50%'
                }} />
            }
            <NewButton title="BACK" onPress={() => { navigation.navigate('RestaurantSelection', { nextScreen: 'Booking' })}}
                style={{
                    backgroundColor: '#F6C066',
                    borderColor: '#000',
                    borderWidth: 1,
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 0.15,
                    justifyContent: 'center',


                }} />
        </View>

    );
}

export default BookingScreen;

