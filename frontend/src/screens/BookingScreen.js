import {View} from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import NewButton from "../components/NewButton";
import TimePicker from "../components/TimePicker";
import {useEffect} from "react";
import {useDispatch} from 'react-redux'
import {createBooking} from '../store/orderSlice'


const BookingScreen = ({ route, navigation }) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(createBooking())
    }, [])
    let now = new Date();
    const [selectedDay, setSelectedDay] = useState(null);
    const { nome_sede } = route.params;
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // Gennaio è 0
    let yyyy = now.getFullYear();
    let today = yyyy + '-' + mm + '-' + dd;
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
                onDayPress={day => { selectedDay === day.dateString ? setSelectedDay(null) : setSelectedDay(day.dateString); }}
                markedDates={{ [selectedDay]: { selected: true, selectedColor: '#F0A54C' } }}
                minDate={today}
            />
            {(selectedDay != null) ?
                <View>
                    <TimePicker navigation={navigation} nome_sede={nome_sede} now={now} />
                    <NewButton title="PRENOTA" onPress={()=>navigation.navigate('ThanksForBooking', {where: nome_sede})}/>
                </View>
                :
                <View style={{
                    backgroundColor: '#F6C066',
                    height: '50%'
                }} />
            }
            <NewButton title="BACK" onPress={() => { navigation.navigate('RestaurantSelection', { nextScreen: 'Booking' }); setSelectedDay(null) }}
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

