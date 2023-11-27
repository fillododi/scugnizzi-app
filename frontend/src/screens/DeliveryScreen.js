import { View, Text } from "react-native"
import Menu from "../components/Menu"
import NewButton from "../components/NewButton"
import TimePicker from "../components/TimePicker"




const DeliveryScreen = ({ route, navigation }) => {
    const { nome_sede } = route.params;
    return (
        <View>
            <Text>{nome_sede}</Text>
        </View>

    )
}

export default DeliveryScreen;