import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SplashScreen from "./src/screens/SplashScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import DrawerMenu from "./src/components/DrawerMenu";
import { useEffect, useState } from "react";



export default function App() {
    const [isLoading, setIsLoading] = useState(true) //loading diventerà false quando si saprà se l'utente è già loggato
    const [userToken, setUserToken] = useState(null)

    useEffect(() => {
        (async () => {
            //todo: implementare logica, per ora ritorna sempre null dopo 2 secondi
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000))
                const token = null
                setUserToken(token)
            } finally {
                setIsLoading(false)
            }
        })();
    }, []) //vede se l'utente è loggato

    if (isLoading) {
        return <SplashScreen />
    }

    const Drawer = createDrawerNavigator();
    return <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ title: '' }}

            drawerContent={(props) => {
                return (
                    <DrawerContentScrollView {...props} >
                        <DrawerMenu navigation={props.navigation} loggedIn={userToken ? true : false} setUserToken={setUserToken} />
                    </DrawerContentScrollView>
                );
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Restaurant" component={RestaurantScreen} />
            {userToken ?
                <>
                    <Drawer.Screen name="Profile" component={ProfileScreen} />
                </>
                :
                <>
                    <Drawer.Screen name="SignIn" component={SignInScreen} initialParams={{ setUserToken }} />
                    <Drawer.Screen name="SignUp" component={SignUpScreen} initialParams={{ setUserToken }} />
                </>
            }
        </Drawer.Navigator>
    </NavigationContainer >
}


