import { View, Text, Button } from "react-native";
import { styles } from "../styles";
import { Calendar } from "react-native-calendars";


const BookingScreen = ({ route, navigation }) => {
    const { nome_sede } = route.params;
    return (
        <View style={styles.container}>
            <Text>Booking Screen</Text>
            <Calendar />
            <Button title="BACK" onPress={() => navigation.navigate('Restaurant', { name: nome_sede })} />
        </View>
    );
}

export default BookingScreen;