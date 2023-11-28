import { View, Text } from "react-native";
import Menu from "../components/Menu";
import NewButton from "../components/NewButton";
import TimePicker from "../components/TimePicker";


const TakeOut = ({ route, navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <Text>Take Out, da modificare, la selezione orario va messa in un altra pagina</Text>
            <Menu />
            <NewButton title="BACK" onPress={() => { navigation.navigate('Home') }}
                style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
            <TimePicker navigation={navigation} nome_sede={route.nome_sede} now={new Date()} />
        </View>
    );
}

export default TakeOut;