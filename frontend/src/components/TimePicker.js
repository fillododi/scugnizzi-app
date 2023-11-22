import { View, Text, ScrollView } from 'react-native';
import NewButton from './NewButton';

const TimePicker = ({ navigation, nome_sede, now }) => {

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
}

export default TimePicker;