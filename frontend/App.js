import {Provider, useSelector, useDispatch} from 'react-redux'
import store from './src/store'
import {setIsLoadingAuthData, setUserToken} from './src/store/authSlice'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SplashScreen from "./src/screens/SplashScreen";
import ThanksForBooking from './src/screens/ThanksForBooking';
import RestaurantScreen from "./src/screens/RestaurantScreen";
import BookingScreen from "./src/screens/BookingScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import TakeOut from "./src/screens/TakeOutScreen";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import DrawerMenu from "./src/components/DrawerMenu";
import { useEffect} from "react";



export default function App() {
    const {isLoading, userToken} = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            //todo: implementare logica, per ora ritorna sempre null dopo 2 secondi
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000))
                const token = null
                dispatch(setUserToken(token))
            } finally {
                dispatch(setIsLoadingAuthData(false))
            }
        })();
    }, []) //vede se l'utente è loggato

    if (isLoading) {
        return <SplashScreen />
    }

    const Drawer = createDrawerNavigator();
    return <Provider store={store}>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home' screenOptions={{ title: '' }}
                drawerContent={(props) => {
                    return (
                        <DrawerContentScrollView {...props} >
                            <DrawerMenu navigation={props.navigation}/>
                        </DrawerContentScrollView>
                    );
                }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Restaurant" component={RestaurantScreen} />
                <Drawer.Screen name="Booking" component={BookingScreen} />
                <Drawer.Screen name="ThanksForBooking" component={ThanksForBooking} />

                <Drawer.Screen name="TakeOut" component={TakeOut} />
                <Drawer.Screen name="Delivery" component={DeliveryScreen} />

                {userToken ?
                    <>
                        <Drawer.Screen name="Profile" component={ProfileScreen} />
                    </>
                    :
                    <>
                        <Drawer.Screen name="SignIn" component={SignInScreen}/>
                        <Drawer.Screen name="SignUp" component={SignUpScreen}/>
                    </>
                }
            </Drawer.Navigator>
        </NavigationContainer >
    </Provider>
}


