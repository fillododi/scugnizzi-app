import { View, Image } from "react-native";
import { homeScreenStyles } from "../styles";
import { ClickableRestaurant } from "../components/clickableRestaurant";
import Strip from "../components/Strip";
import { restaurant_img, margherita_bg } from "../images";
import { BORGOFORTE_COORDINATES, BUSCOLDO_COORDINATES, MONTANARA_COORDINATES, calculateDistance } from "../utils/location";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const RestaurantSelectionScreen = ({ route, navigation }) => {
    const location = useSelector((state) => state.location)
    const { nextScreen } = route.params
    const [restaurants, setRestaurants] = useState({
        borgoforte: {
            img_path: restaurant_img.borgoforte,
            location: "Via al Ponte 1, 46030 Borgoforte MN",
            name: "Borgoforte",
            distance: 0
        },
        buscoldo: {
            img_path: restaurant_img.buscoldo,
            location: "Via G. Marconi 31, 46010 Buscoldo MN",
            name: "Buscoldo",
            distance: 0
        },
        montanara: {
            img_path: restaurant_img.montanara,
            location: "Via Livorno 3, 46010 Montanara MN",
            name: "Montanara",
            distance: 0
        }
    })

    useEffect(() => {
        if (location.latitude && location.longitude) {
            setRestaurants({
                borgoforte: { ...restaurants.borgoforte, distance: calculateDistance(location, BORGOFORTE_COORDINATES).toFixed(2) },
                buscoldo: { ...restaurants.buscoldo, distance: calculateDistance(location, BUSCOLDO_COORDINATES).toFixed(2) },
                montanara: { ...restaurants.montanara, distance: calculateDistance(location, MONTANARA_COORDINATES).toFixed(2) },
            })
        }
    }, [location])
    return (

        <View style={homeScreenStyles.homescreen}>

            <Image style={{
                width: '100%',
                height: '20%',
            }}
                source={margherita_bg} />

            <Strip text="SCEGLI LA SEDE" />

            {Object.values(restaurants).sort((res1, res2) => {
                if (res1.distance > res2.distance) {
                    return 1
                }
                if (res1.distance < res2.distance) {
                    return -1
                }
                return 0
            }).map(restaurant => {
                return <ClickableRestaurant navigation={navigation} next_screen={nextScreen} img_path={restaurant.img_path} location={restaurant.location} nome_sede={restaurant.name} distanza={restaurant.distance} />
            })}
        </View>
    );
}



export default RestaurantSelectionScreen