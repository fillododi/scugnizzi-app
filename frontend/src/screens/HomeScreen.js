import { View, Image } from "react-native";
import { styles, homeScreenStyles } from "../styles";
import { ClickableRestaurant } from "../components/clickableRestaurant";
import { sHeight, sWidth } from "../styles";

const HomeScreen = ({ navigation }) => {
    return (

        <View style={homeScreenStyles.homescreen}>

            <Image style={{
                width: sWidth,
                height: sHeight * 0.16,
                resizeMode: 'contain',
            }}
                source={require('../../assets/img/logonobg.png')} />

            <ClickableRestaurant navigation={navigation} img_path={require('../../assets/img/borgoforte.jpg')} location="Via al Ponte, 1, 46030 Borgoforte MN" />

            <ClickableRestaurant navigation={navigation} img_path={require('../../assets/img/buscoldo.jpg')} location="Via G. Marconi, 31, 46010 Buscoldo MN" />

            <ClickableRestaurant navigation={navigation} img_path={require('../../assets/img/montanara.jpg')} location="Via Livorno, 3, 46010 Montanara MN" />

        </View>
    );
}



export default HomeScreen