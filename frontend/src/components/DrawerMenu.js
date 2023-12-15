import { useDispatch, useSelector } from 'react-redux'
import { setUserToken } from '../store/authSlice'
import { styles } from "../styles";
import { Button, View, Text } from 'react-native'
import SlideBarButton from './SlideBarButton';
import { SlideInRight } from 'react-native-reanimated';
import { StyleSheet, Dimensions } from "react-native";


export const sWidth = Dimensions.get('window').width;
export const sHeight = Dimensions.get('window').height;


const DrawerMenu = ({ navigation }) => {
    const dispatch = useDispatch()
    const { userToken } = useSelector((state) => state.auth)
    return <View style={
        {
            display: "flex",
            backgroundColor: '#D32222',
            alignItems: "flex-start",
            //justifyContent: "center",
            flexDirection: "column",
            height: sHeight,
            width: sWidth, // DA MODIFICARE

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
                        alignItems: "flex-start",
                        //justifyContent: "space-evenly",
                        flexDirection: "column",
                        width: '100%',
                        height: '75%',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }
                }>
                    <View style={{
                        top: 10,
                        width: "100%",
                    }}>
                        <Text style={{ height: sHeight * 3 / 32, fontWeight: "bold" }}>Account</Text>
                        <SlideBarButton text="Le mie informazioni" onPress={() => navigation.navigate("Profile")} />
                        <SlideBarButton text="Prenotazioni" onPress={() => navigation.navigate("Home")} />
                        <SlideBarButton text="Ordini" onPress={() => navigation.navigate("Home")} />
                        <SlideBarButton text="Metodi di pagamento" onPress={() => navigation.navigate("Home")} />
                        <SlideBarButton text="Indirizzi" onPress={() => navigation.navigate("Home")} />
                        <SlideBarButton text="Esci" onPress={() => dispatch(setUserToken(null))} />
                        <SlideBarButton text="Home" onPress={() => navigation.navigate("Home")} />
                    </View>
                </View>
            </>
            :
            <>
                <View style={{
                    width: '100%',
                    height: '25%',
                    backgroundColor: '#D32222',

                }}>
                    <Text>CIAO</Text>
                    <Button title="close" onPress={() => navigation.closeDrawer()} />
                </View>
                <View style={{
                    display: "flex",
                    backgroundColor: '#fff',
                    alignItems: "flex-start",
                    //justifyContent: "center",
                    flexDirection: "column",
                    width: '100%',
                    height: '75%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    <View style={{ top: 0, width: "100%" }}>
                        <Text style={{ height: sHeight * 3 / 32, fontWeight: "bold" }}>Account</Text>
                        <SlideBarButton text="Accedi" onPress={() => navigation.navigate("SignIn")} />
                        <SlideBarButton text="Registrati" onPress={() => navigation.navigate("SignUp")} />
                        <SlideBarButton text="Home" onPress={() => navigation.navigate("Home")} />
                    </View>
                </View>
            </>
        }
    </View >
}

export default DrawerMenu