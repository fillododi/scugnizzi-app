import { styles } from "../styles";

import {View, Text, Button} from "react-native"

const OrdersManagementScreen = ({navigation}) => {
    return <View style={styles.container}>
        <Text>Qui vedrai i tuoi ordini e potrai gestirli!</Text>
        <Button onPress={()=>navigation.navigate('DetailedOrder')} title='Cliccando qui, puoi vedere il dettaglio del tuo ordine!'/>
        <Button onPress={()=>navigation.navigate('DetailedOrder')} title='Cliccando qui, puoi vedere il dettaglio del tuo ordine!'/>
        <Button onPress={()=>navigation.navigate('DetailedOrder')} title='Cliccando qui, puoi vedere il dettaglio del tuo ordine!'/>
    </View>
}

export default OrdersManagementScreen