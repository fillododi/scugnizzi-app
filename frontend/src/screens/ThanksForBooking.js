import { View, Text } from 'react-native';
import NewButton from '../components/NewButton';

const ThanksForBooking = ({ route, navigation }) => {
    return (
        <View>
            <Text>Thanks For Booking!</Text>
            <Text>{route.params.where}</Text>
            <Text>{route.params.when}</Text>
            <NewButton title="BACK" onPress={() => { navigation.navigate('Home') }}
                style={{ height: '20%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
        </View>
    );
}

export default ThanksForBooking;