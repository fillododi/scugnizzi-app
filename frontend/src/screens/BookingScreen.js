import { View, Text, Button, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import NewButton from "../components/NewButton";


let now = new Date();

const BookingScreen = ({ route, navigation }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const { nome_sede } = route.params;
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // Gennaio è 0
    let yyyy = now.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return (
        <View style={
            {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#F6C066',
                height: '100vh',
                flex: 1,
            }
        }>
            <Calendar
                onDayPress={day => { selectedDay == day.dateString ? setSelectedDay(null) : setSelectedDay(day.dateString); }}
                markedDates={{ [selectedDay]: { selected: true, selectedColor: '#F0A54C' } }}
                minDate={today}
            />
            <TimePicker selectedDay={selectedDay} navigation={navigation} nome_sede={nome_sede} />
            <NewButton title="BACK" onPress={() => { navigation.navigate('Restaurant', { name: nome_sede }); setSelectedDay(null) }}
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


const TimePicker = ({ selectedDay, navigation, nome_sede }) => {
    if (selectedDay != null) {


        let possibleTimes = [];
        let h = now.getHours();
        let m = now.getMinutes();
        // get all possible times from now to 23:00 with 30 minutes interval
        for (let i = h; i < 24; i++) {
            if (i == h) {
                if (m < 30) {
                    possibleTimes.push(h + ':30');
                }
            } else {
                possibleTimes.push(i + ':00');
                possibleTimes.push(i + ':30');
            }
        }

        return (
            <View style={{ display: 'flex', flex: 1 }}>

                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Seleziona un orario:</Text>
                <ScrollView style={{
                    backgroundColor: '#F6C066',

                }}>


                    {possibleTimes.map((time) => {
                        return (
                            <NewButton title={time} style={
                                {
                                    backgroundColor: '#D32222',
                                    borderColor: '#000',
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    //flex: 1,
                                    justifyContent: 'center',
                                    minHeight: 50,
                                    width: '80%',
                                    marginLeft: '10%',

                                }
                            }
                                onPress={() => navigation.navigate('ThanksForBooking', { where: nome_sede, when: time })} />
                        );
                    })}
                </ScrollView >
            </View>
        );
    } else return (
        <View style={{
            backgroundColor: '#F6C066',
            height: '50%'
        }} />
    );
}