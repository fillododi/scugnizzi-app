import {useDispatch, useSelector} from 'react-redux'
import {setUserToken} from '../store/authSlice'
import { styles } from "../styles";
import { Button, View, Text } from 'react-native'

const DrawerMenu = ({navigation}) => {
    const dispatch = useDispatch()
    const {userToken} = useSelector((state) => state.auth)
    const location = useSelector((state) => state.location)
    return <View style={styles.container}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Text>Your location is {JSON.stringify(location)}</Text>
        {userToken!= null ?
            <View style={styles.container}>
                <Button title="Profilo" onPress={() => navigation.navigate("Profile")} />
                <Button title="Esci" onPress={() => dispatch(setUserToken(null))} />
            </View>
            :
            <View style={styles.container}>
                <Button title="Accedi" onPress={() => navigation.navigate("SignIn")} />
                <Button title="Registrati" onPress={() => navigation.navigate("SignUp")} />
            </View>
        }
    </View>
}

export default DrawerMenu