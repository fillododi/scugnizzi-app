import { View } from "react-native";
import styles from "../styles";
import { ClickableRestaurant } from "../components/clickableRestaurant";

const HomeScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>

            <ClickableRestaurant navigation={navigation} img_path={require('../../assets/icon.png')} location="LOCATION 1" />

            <ClickableRestaurant navigation={navigation} img_path={require('../../assets/icon.png')} location="LOCATION 2" />

            <ClickableRestaurant navigation={navigation} img_path={require('../../assets/icon.png')} location="LOCATION 3" />

        </View>
    );
}



export default HomeScreen