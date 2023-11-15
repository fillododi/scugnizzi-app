import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";

import { Text } from 'react-native'


export default function App() {
    const Drawer = createDrawerNavigator();
    return <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ title: '' }} drawerContent={(props) => {
            return (
                <DrawerContentScrollView {...props}>
                    <Text>Menù</Text>
                </DrawerContentScrollView>
            );
        }}>

            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Restaurant" component={RestaurantScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
}
