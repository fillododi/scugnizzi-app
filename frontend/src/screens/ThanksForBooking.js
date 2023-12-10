import { View, Text } from 'react-native';
import NewButton from '../components/NewButton';
import {useSelector} from "react-redux";

const ThanksForBooking = ({ navigation }) => {
    const {selectedRestaurant} = useSelector(state => state.selectedRestaurant)
    const {day, time, peopleAmount, name, phoneNumber, email, address} = useSelector(state => state.booking)
    return (
        <View>
            <Text>Thanks For Booking!</Text>
            <Text>{selectedRestaurant}</Text>
            <Text>{day} {time} {peopleAmount} {name} {phoneNumber} {email} {address}</Text>
            <NewButton title="BACK" onPress={() => { navigation.navigate('Home') }}
                style={{ height: '20%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
        </View>
    );
}

export default ThanksForBooking;