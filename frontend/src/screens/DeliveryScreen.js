import { View, Text } from "react-native"

const DeliveryScreen = ({route}) => {
    const { nome_sede } = route.params;
    return (
        <View>
            <Text>{nome_sede}</Text>
        </View>

    )
}

export default DeliveryScreen;