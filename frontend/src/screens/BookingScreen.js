import {Button, Text, TextInput, View} from "react-native";
import { Calendar } from "react-native-calendars";
import {useEffect} from "react";
import NewButton from "../components/NewButton";
import {useDispatch, useSelector} from 'react-redux'
import {createBooking} from '../store/bookingSlice'
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from "react";


const BookingScreen = ({ navigation }) => {
    const [day, setDay] = useState('');
    const [time, setTime] = useState(new Date());
    const [people, setPeople] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [showTimePicker, setShowTimePicker] = useState(false);

    const { userToken } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // Gennaio è 0
    let yyyy = now.getFullYear();
    let today = yyyy + '-' + mm + '-' + dd;

    const handleTimePickerChange = async (e, selectedTime) => {
        await setTime(selectedTime);
        setShowTimePicker(false)
    }

    const handleSubmit = () => {
        const booking = {
            day: day,
            time: time.toLocaleTimeString(),
            peopleAmount: people,
            name: name,
            phoneNumber: phone,
            email: email
        }
        dispatch(createBooking(booking))
        navigation.navigate('ThanksForBooking')
    }

    useEffect(()=>{
        if(userToken !== null){
            setEmail('prova@prova.com');
            setName('Pippo Provino')
            setPhone('12345678')
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
                onDayPress={pressedDay => { day === pressedDay.dateString ? setDay(null) : setDay(pressedDay.dateString); }}
                markedDates={{ [day]: { selected: true, selectedColor: '#F0A54C' } }}
                minDate={today}
            />
            {(day !== null) ?
                <View>
                    <Text>Orario: {time.toLocaleTimeString()}</Text>
                    <Button title='Seleziona orario' onPress={()=>setShowTimePicker(true)}/>
                    {showTimePicker && <DateTimePicker value={time} mode='time' is24Hour={true} onChange={handleTimePickerChange}/>}
                    <Text>Numero di persone:</Text>
                    <TextInput value={people} onChangeText={(text)=>{setPeople(text)}}/>
                    {!userToken && <View>
                        <Text>Nome:</Text>
                        <TextInput value={name} onChangeText={(text)=>{setName(text)}}/>
                        <Text>E-Mail:</Text>
                        <TextInput value={email} onChangeText={(text)=>{setEmail(text)}}/>
                        <Text>Numero di telefono:</Text>
                        <TextInput value={phone} onChangeText={(text)=>{setPhone(text)}}/>
                    </View>}
                </View>
                :
                <View style={{
                    backgroundColor: '#F6C066',
                }} />
            }
            <NewButton title="PRENOTA" onPress={handleSubmit} style={{
                backgroundColor: '#F6C066',
                borderColor: '#000',
                borderWidth: 1,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                flex: 0.15,
                justifyContent: 'center',


            }} />
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

