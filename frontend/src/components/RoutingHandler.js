import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import SplashScreen from "../screens/SplashScreen";
import DrawerMenu from "./DrawerMenu";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import BookingScreen from "../screens/BookingScreen";
import ThanksForBooking from "../screens/ThanksForBooking";
import TakeOut from "../screens/TakeOutScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {setIsLoadingAuthData, setUserToken} from "../store/authSlice";
import {setLocation} from "../store/locationSlice"

import * as Location from 'expo-location';

const RoutingHandler = () => {
    const {isLoadingAuthData, userToken} = useSelector(state => state.auth)
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

    useEffect(()=>{
        (async () => {
            let permission = await Location.requestForegroundPermissionsAsync()
            let status = permission.status
            if(status !== 'granted'){ //se l'utente non accetta i permessi
                return
            }
            let position = await Location.getCurrentPositionAsync({})
            dispatch(setLocation(position.coords))
        })()
    }, []) //geolocalizzazione

    if (isLoadingAuthData) {
        return <SplashScreen />
    }

    const Drawer = createDrawerNavigator();
    return <NavigationContainer>
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

            {userToken != null ?
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
}

export default RoutingHandler