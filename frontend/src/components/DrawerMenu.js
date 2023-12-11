import { useDispatch, useSelector } from 'react-redux'
import { setUserToken } from '../store/authSlice'
import { styles } from "../styles";
import { Button, View, Text } from 'react-native'
import SlideBarButton from './SlideBarButton';

const DrawerMenu = ({ navigation }) => {
    const dispatch = useDispatch()
    const { userToken } = useSelector((state) => state.auth)
    return <View style={
        {
            display: "flex",
            backgroundColor: '#D32222',
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: '100%',

        }
    }>



        {userToken != null ?
            <>
                <View style={{
                    width: '100%',
                    height: '25%',
                    backgroundColor: '#D32222',

                }}>
                    <Text>Ciao NOMEUTENTE</Text>
                </View>

                <View style={
                    {
                        display: "flex",
                        backgroundColor: '#fff',
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        width: '100%',
                        height: '75%',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }
                }>
                    <Button title="Profilo" onPress={() => navigation.navigate("Profile")} />
                    <Button title="Esci" onPress={() => dispatch(setUserToken(null))} />
                    <Button title="Home" onPress={() => navigation.navigate("Home")} />
                    <SlideBarButton text="HELLO" />
                </View>
            </>
            :
            <View style={styles.container}>
                <Button title="Accedi" onPress={() => navigation.navigate("SignIn")} />
                <Button title="Registrati" onPress={() => navigation.navigate("SignUp")} />
                <Button title="Home" onPress={() => navigation.navigate("Home")} />
            </View>
        }
    </View >
}

export default DrawerMenu