import { View, Image } from "react-native";
import { styles, homeScreenStyles } from "../styles";
import { ClickableRestaurant } from "../components/clickableRestaurant";
import { sHeight, sWidth } from "../styles";
import { restaurant_img, logo_img } from "../images";


const HomeScreen = ({ navigation }) => {
    return (

        <View style={homeScreenStyles.homescreen}>

            <Image style={{
                width: sWidth,
                height: sHeight * 0.16,
                resizeMode: 'contain',
            }}
                source={logo_img} />

            <ClickableRestaurant navigation={navigation} img_path={restaurant_img.borgoforte} location="Via al Ponte, 1, 46030 Borgoforte MN" nome_sede="BORGOFORTE" />

            <ClickableRestaurant navigation={navigation} img_path={restaurant_img.buscoldo} location="Via G. Marconi, 31, 46010 Buscoldo MN" nome_sede="BUSCOLDO" />

            <ClickableRestaurant navigation={navigation} img_path={restaurant_img.montanara} location="Via Livorno, 3, 46010 Montanara MN" nome_sede="MONTANARA" />

        </View>
    );
}



export default HomeScreen