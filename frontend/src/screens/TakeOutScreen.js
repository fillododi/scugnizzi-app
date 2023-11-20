import { View, Text } from "react-native";
import Menu from "../components/Menu";
import NewButton from "../components/NewButton";

const TakeOut = ({ navigation }) => {
    return (
        <View>
            <Text>Take Out</Text>
            <Menu />
            <NewButton title="BACK" onPress={() => { navigation.navigate('Home') }}
                style={{ height: '20%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
        </View>
    );
}

export default TakeOut;