import { View, Text } from "react-native";
import Menu from "../components/Menu";
import NewButton from "../components/NewButton";
import TimePicker from "../components/TimePicker";
import {useEffect} from "react";
import {useDispatch} from 'react-redux'
import {createTakeoutOrder} from '../store/orderSlice'

const TakeOut = ({ route, navigation }) => {
    const { nome_sede } = route.params;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(createTakeoutOrder())
    }, [])
    return (
        <View style={{ height: '100%' }}>
            <Text>Take Out, da modificare, la selezione orario va messa in un altra pagina</Text>
            <Menu />
            <NewButton title="BACK" onPress={() => { navigation.navigate('RestaurantSelection', {nextScreen: "TakeOut"}) }}
                style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
            <TimePicker navigation={navigation} nome_sede={nome_sede} now={new Date()} />
            <NewButton title="PAGA ORA" onPress={() => { navigation.navigate('ThanksForBooking', {where: nome_sede}) }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
            <NewButton title="PAGA IN CASSA" onPress={() => { navigation.navigate('ThanksForBooking', {where: nome_sede}) }}
                       style={{ height: '10%', backgroundColor: '#F6C066', borderColor: '#000', borderWidth: 1, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
            />
        </View>
    );
}

export default TakeOut;